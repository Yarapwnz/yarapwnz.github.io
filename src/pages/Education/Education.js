import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle } from '../../styles';
import { Timeline, EducationItem, Institution, Degree, DateBadge, Description } from './styles';

const Education = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Education</SectionTitle>
        <Timeline>
          {user.education.map((education, i) => (
            <EducationItem key={i} $index={i}>
              <DateBadge>
                {education.start.year} — {education.end.year || 'Present'}
              </DateBadge>
              <Institution>{education.institution}</Institution>
              <Degree>
                {education.studyType}, {education.area}
              </Degree>
              {education.description && (
                <Description>{education.description.replace('\n\n', '\n')}</Description>
              )}
            </EducationItem>
          ))}
        </Timeline>
      </div>
    </Layout>
  );
};

export default Education;