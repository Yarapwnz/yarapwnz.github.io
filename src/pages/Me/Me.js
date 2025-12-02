import React from 'react';
import { Application, DataBase, Code, Tools, CloudApp, Api } from '@carbon/icons-react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph } from '../../styles';
import {
  ProfileLink,
  SkillsContainer,
  SkillCategory,
  CategoryHeader,
  CategoryIcon,
  CategoryTitle,
  SkillsList,
  SkillPill
} from './styles';

const skillCategories = [
  {
    name: 'Frontend',
    icon: Application,
    color: '#0f62fe',
    bgColor: 'rgba(15, 98, 254, 0.15)',
    textColor: '#78a9ff',
    keywords: ['React', 'React-Native', 'NextJS', 'Expo', 'HTML', 'CSS', 'TypeScript', 'JavaScript', 'Material-UI', 'Ant Design', 'Bootstrap', 'Dripsy']
  },
  {
    name: 'State Management',
    icon: CloudApp,
    color: '#8a3ffc',
    bgColor: 'rgba(138, 63, 252, 0.15)',
    textColor: '#be95ff',
    keywords: ['Redux', 'Mobx', 'Zustand']
  },
  {
    name: 'Backend',
    icon: Code,
    color: '#2ecc40',
    bgColor: 'rgba(46, 204, 64, 0.15)',
    textColor: '#2ecc40',
    keywords: ['Node', 'Express']
  },
  {
    name: 'Databases',
    icon: DataBase,
    color: '#ff7eb6',
    bgColor: 'rgba(255, 126, 182, 0.15)',
    textColor: '#ff7eb6',
    keywords: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase']
  },
  {
    name: 'APIs & Integration',
    icon: Api,
    color: '#f1c21b',
    bgColor: 'rgba(241, 194, 27, 0.15)',
    textColor: '#f1c21b',
    keywords: ['REST', 'Apollo', 'GraphQL', 'Axios', 'Google', 'Apple', 'Push Notifications', 'Onesignal']
  },
  {
    name: 'Tools & Libraries',
    icon: Tools,
    color: '#fa4d56',
    bgColor: 'rgba(250, 77, 86, 0.15)',
    textColor: '#fa4d56',
    keywords: ['Formik', 'yup', 'react-hook-form', 'i18next', 'Postman', 'Sentry', 'Zendesk', 'IDWise', 'Figma', 'React-Navigation', 'Expo-router', 'React-Native-Reanimated', 'Google Maps']
  }
];

const categorizeSkills = (skills) => {
  const categorized = skillCategories.map(category => ({
    ...category,
    skills: []
  }));

  const uncategorized = [];

  skills.forEach(skill => {
    const skillName = skill.name.toLowerCase();
    let found = false;

    for (const category of categorized) {
      for (const keyword of category.keywords) {
        if (skillName.includes(keyword.toLowerCase())) {
          category.skills.push(skill.name);
          found = true;
          break;
        }
      }
      if (found) break;
    }

    if (!found) {
      uncategorized.push(skill.name);
    }
  });

  return categorized.filter(cat => cat.skills.length > 0);
};

const Me = ({ user }) => {
  const categorizedSkills = categorizeSkills(user.skills);

  return (
    <Layout user={user}>
      <div>
        <SectionTitle>About Me</SectionTitle>
        <Paragraph>{user.basics.summary}</Paragraph>
      </div>
      <div>
        <SectionTitle>Skills</SectionTitle>
        <SkillsContainer>
          {categorizedSkills.map((category, index) => (
            <SkillCategory key={category.name} $index={index}>
              <CategoryHeader>
                <CategoryIcon $color={category.color}>
                  <category.icon size={18} />
                </CategoryIcon>
                <CategoryTitle>{category.name}</CategoryTitle>
              </CategoryHeader>
              <SkillsList>
                {category.skills.map(skill => (
                  <SkillPill
                    key={skill}
                    $bgColor={category.bgColor}
                    $textColor={category.textColor}
                  >
                    {skill}
                  </SkillPill>
                ))}
              </SkillsList>
            </SkillCategory>
          ))}
        </SkillsContainer>
      </div>
      <div>
        <SectionTitle>Profiles</SectionTitle>
        <ul>
          {user.basics.profiles.map((profile, i) => (
            <ProfileLink key={profile.network}>
              {i !== 0 && ' | '}
              <a href={profile.url} target="_blank" rel="noreferrer noopener">
                {profile.network}
              </a>
            </ProfileLink>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Me;