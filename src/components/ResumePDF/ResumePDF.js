import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
  Image
} from '@react-pdf/renderer';

const colors = {
  primary: '#0f62fe',
  background: '#ffffff',
  cardBg: '#f4f4f4',
  text: '#161616',
  textSecondary: '#525252',
  border: '#e0e0e0',
  accent: {
    blue: '#0f62fe',
    purple: '#8a3ffc',
    green: '#198038',
    pink: '#d02670',
    yellow: '#b28600',
    red: '#da1e28'
  }
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.background,
    padding: 40,
    fontFamily: 'Helvetica',
    color: colors.text,
  },
  headerContainer: {
    flexDirection: 'row',
    marginBottom: 24,
    borderBottom: `2px solid ${colors.primary}`,
    paddingBottom: 16,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  headerInfo: {
    flex: 1,
  },
  name: {
    fontSize: 28,
    fontFamily: 'Helvetica-Bold',
    color: colors.text,
    marginBottom: 4,
  },
  title: {
    fontSize: 14,
    color: colors.accent.blue,
    marginBottom: 8,
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 8,
  },
  contactItem: {
    fontSize: 9,
    color: colors.textSecondary,
  },
  link: {
    color: colors.accent.blue,
    textDecoration: 'none',
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 14,
    fontFamily: 'Helvetica-Bold',
    color: colors.text,
    marginBottom: 10,
    paddingBottom: 4,
    borderBottom: `1px solid ${colors.border}`,
  },
  summary: {
    fontSize: 10,
    color: colors.textSecondary,
    lineHeight: 1.6,
  },
  experienceItem: {
    marginBottom: 12,
    backgroundColor: colors.cardBg,
    padding: 10,
    borderRadius: 6,
    borderLeft: `3px solid ${colors.primary}`,
    breakInside: 'avoid',
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  companyName: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: colors.text,
  },
  dateRange: {
    fontSize: 8,
    color: colors.accent.blue,
  },
  jobTitle: {
    fontSize: 9,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  highlights: {
    marginTop: 4,
  },
  highlight: {
    fontSize: 8,
    color: colors.textSecondary,
    marginBottom: 2,
    paddingLeft: 8,
  },
  skillsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
  skillPill: {
    fontSize: 8,
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 10,
    marginRight: 4,
    marginBottom: 4,
    backgroundColor: colors.cardBg,
    color: colors.textSecondary,
  },
  projectItem: {
    marginBottom: 8,
    backgroundColor: colors.cardBg,
    padding: 8,
    borderRadius: 6,
    breakInside: 'avoid',
  },
  projectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  projectName: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: colors.text,
  },
  projectCategory: {
    fontSize: 7,
    color: colors.accent.purple,
    backgroundColor: 'rgba(190, 149, 255, 0.2)',
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 8,
  },
  projectDescription: {
    fontSize: 8,
    color: colors.textSecondary,
    marginTop: 4,
    lineHeight: 1.4,
  },
  projectTech: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 4,
  },
  techTag: {
    fontSize: 7,
    backgroundColor: '#e0e0e0',
    color: colors.textSecondary,
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 3,
    marginRight: 3,
    marginBottom: 3,
  },
  educationItem: {
    marginBottom: 8,
    backgroundColor: colors.cardBg,
    padding: 8,
    borderRadius: 6,
    breakInside: 'avoid',
  },
  schoolName: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: colors.text,
  },
  degree: {
    fontSize: 8,
    color: colors.textSecondary,
    marginTop: 2,
  },
  eduDateRange: {
    fontSize: 8,
    color: colors.accent.blue,
    marginTop: 4,
  },
  languagesRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  languageTag: {
    fontSize: 9,
    backgroundColor: colors.cardBg,
    color: colors.text,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
});

const formatDate = (dateStr) => {
  if (!dateStr) return 'Present';
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
};

// Normalize skill name for comparison (remove dashes, spaces, @ prefix)
const normalizeForComparison = (name) => {
  return name.toLowerCase().replace(/[-\s@]/g, '');
};

// Helper to get unique skills from user.skills and projects
const getAllUniqueSkills = (user) => {
  const skillSet = new Set();
  const skills = [];

  const addSkill = (name) => {
    if (!name) return;
    // Remove parentheses content and split by /, +, or ||
    const cleaned = name
      .replace(/\s*\([^)]*\)?/g, '')  // Remove (content) or (content
      .replace(/[()]/g, '');           // Remove any remaining parentheses
    const parts = cleaned.split(/\s*(?:[\/+]|\|\|)\s*/);
    parts.forEach(part => {
      const cleanName = part.trim();
      const normalized = normalizeForComparison(cleanName);
      if (cleanName && !skillSet.has(normalized)) {
        skillSet.add(normalized);
        skills.push(cleanName);
      }
    });
  };

  // Add from user.skills
  (user.skills || []).forEach(skill => addSkill(skill.name));

  // Add from projects
  (user.projects || []).forEach(project => {
    [...(project.languages || []), ...(project.libraries || [])].forEach(addSkill);
  });

  return skills;
};

const ResumePDF = ({ user }) => {
  const allSkills = getAllUniqueSkills(user);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header with Photo */}
        <View style={styles.headerContainer}>
          {user.basics.image && (
            <Image style={styles.profileImage} src={user.basics.image} />
          )}
          <View style={styles.headerInfo}>
            <Text style={styles.name}>{user.basics.name}</Text>
            <Text style={styles.title}>{user.basics.label}</Text>
            <View style={styles.contactRow}>
              {user.basics.email && (
                <Link style={[styles.contactItem, styles.link]} src={`mailto:${user.basics.email}`}>
                  {user.basics.email}
                </Link>
              )}
              {user.basics?.location && (
                <Text style={styles.contactItem}>
                  {[user.basics.location?.city, user.basics.location?.region, user.basics.location?.country].filter(Boolean).join(', ')}
                </Text>
              )}
              {user.basics.profiles?.map((profile, i) => (
                <Link key={i} style={[styles.contactItem, styles.link]} src={profile.url}>
                  {profile.network}
                </Link>
              ))}
            </View>
          </View>
        </View>

        {/* Summary */}
        {user.basics.summary && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>About</Text>
            <Text style={styles.summary}>{user.basics.summary}</Text>
          </View>
        )}

        {/* Experience */}
        {user.work && user.work.length > 0 && (
          <View style={styles.section}>
            {user.work.map((job, i) => {
              const jobContent = (
                <>
                  <View style={styles.experienceHeader}>
                    <Text style={styles.companyName}>{job.name || job.company}</Text>
                    <Text style={styles.dateRange}>
                      {formatDate(job.startDate)} - {formatDate(job.endDate)}
                    </Text>
                  </View>
                  <Text style={styles.jobTitle}>{job.position}</Text>
                  {job.highlights && job.highlights.length > 0 && (
                    <View style={styles.highlights}>
                      {job.highlights.map((h, j) => (
                        <Text key={j} style={styles.highlight}>• {h}</Text>
                      ))}
                    </View>
                  )}
                </>
              );

              if (i === 0) {
                return (
                  <View key={i} wrap={false}>
                    <Text style={styles.sectionTitle}>Experience</Text>
                    <View style={styles.experienceItem}>
                      {jobContent}
                    </View>
                  </View>
                );
              }
              return (
                <View key={i} style={styles.experienceItem} wrap={false}>
                  {jobContent}
                </View>
              );
            })}
          </View>
        )}

        {/* Skills - All skills in one row */}
        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <View style={styles.skillsRow}>
            {allSkills.map((skill, i) => (
              <Text key={i} style={styles.skillPill}>{skill}</Text>
            ))}
          </View>
        </View>

        {/* Projects - All with full tech stack */}
        {user.projects && user.projects.length > 0 && (
          <View style={styles.section}>
            {user.projects.map((project, i) => {
              const projectContent = (
                <>
                  <View style={styles.projectHeader}>
                    <Text style={styles.projectName}>{project.name}</Text>
                    {project.summary && (
                      <Text style={styles.projectCategory}>{project.summary}</Text>
                    )}
                  </View>
                  {project.description && (
                    <Text style={styles.projectDescription}>{project.description}</Text>
                  )}
                  {(project.languages || project.libraries) && (
                    <View style={styles.projectTech}>
                      {[...(project.languages || []), ...(project.libraries || [])].map((tech, j) => (
                        <Text key={j} style={styles.techTag}>{tech}</Text>
                      ))}
                    </View>
                  )}
                </>
              );

              if (i === 0) {
                return (
                  <View key={i} wrap={false}>
                    <Text style={styles.sectionTitle}>Projects</Text>
                    <View style={styles.projectItem}>
                      {projectContent}
                    </View>
                  </View>
                );
              }
              return (
                <View key={i} style={styles.projectItem} wrap={false}>
                  {projectContent}
                </View>
              );
            })}
          </View>
        )}

        {/* Education - Full section */}
        {user.education && user.education.length > 0 && (
          <View style={styles.section}>
            {user.education.map((edu, i) => {
              const eduContent = (
                <>
                  <Text style={styles.schoolName}>{edu.institution}</Text>
                  <Text style={styles.degree}>
                    {edu.studyType && `${edu.studyType}, `}{edu.area}
                  </Text>
                  <Text style={styles.eduDateRange}>
                    {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                  </Text>
                </>
              );

              if (i === 0) {
                return (
                  <View key={i} wrap={false}>
                    <Text style={styles.sectionTitle}>Education</Text>
                    <View style={styles.educationItem}>
                      {eduContent}
                    </View>
                  </View>
                );
              }
              return (
                <View key={i} style={styles.educationItem} wrap={false}>
                  {eduContent}
                </View>
              );
            })}
          </View>
        )}

        {/* Languages - After Education */}
        {user.languages && user.languages.length > 0 && (
          <View style={styles.section} wrap={false}>
            <Text style={styles.sectionTitle}>Languages</Text>
            <View style={styles.languagesRow}>
              {user.languages.map((lang, i) => (
                <Text key={i} style={styles.languageTag}>
                  {lang.language} · {lang.fluency}
                </Text>
              ))}
            </View>
          </View>
        )}
      </Page>
    </Document>
  );
};

export default ResumePDF;
