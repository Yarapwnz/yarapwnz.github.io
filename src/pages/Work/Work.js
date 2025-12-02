import React from "react";
import Layout from "../../components/Layout";
import { SectionTitle } from "../../styles";
import { Timeline, WorkItem, WorkTitle, JobTitle, Location, DateBadge, Summary } from "./styles";

const Work = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Work Experience</SectionTitle>
        <Timeline>
          {user.work.map((work, i) => (
            <WorkItem key={i} $index={i}>
              <DateBadge>
                {work.start.year} — {work.end.year ? work.end.year : "Present"}
              </DateBadge>
              <WorkTitle>{work.position}</WorkTitle>
              <div>
                <JobTitle>{work.company}</JobTitle>
                {work.location && <Location> · {work.location}</Location>}
              </div>
              <Summary>{work.summary}</Summary>
            </WorkItem>
          ))}
        </Timeline>
      </div>
    </Layout>
  );
};

export default Work;
