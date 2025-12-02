import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Document, LogoGithub, LogoLinkedin, LogoTwitter, SendAlt } from "@carbon/icons-react";

import {
  HeaderContainer,
  Header,
  Image,
  ButtonsContainer,
  SocialLinks,
  SocialLink,
  ViewResumeLink,
  ExperienceSection,
  ExperienceNumber,
  ExperienceText,
  LanguagesSection,
  LanguagesTitle,
  LanguagesList,
  LanguageTag
} from "./styles";

const socialColors = {
  GitHub: '#333',
  LinkedIn: '#0077b5',
  Twitter: '#1da1f2',
  Telegram: '#0088cc'
};

const socialIcons = {
  GitHub: LogoGithub,
  LinkedIn: LogoLinkedin,
  Twitter: LogoTwitter,
  Telegram: SendAlt
};

const calculateYearsOfExperience = (work) => {
  if (!work || work.length === 0) return 0;

  const earliestDate = work.reduce((earliest, job) => {
    const jobDate = new Date(job.startDate);
    return jobDate < earliest ? jobDate : earliest;
  }, new Date(work[0].startDate));

  const now = new Date();
  const years = (now - earliestDate) / (1000 * 60 * 60 * 24 * 365.25);
  return Math.floor(years * 10) / 10;
};

const UserHeader = ({ user }) => {
  const location = useLocation();
  const yearsOfExperience = calculateYearsOfExperience(user.work);

  return (
    <HeaderContainer isHome={location.pathname === "/"}>
      <Header>
        <Image src={user.basics.image} />
        <div>
          <h2>{user.basics.name}</h2>
          <p>{user.basics.label}</p>
          {user.basics.location && (
            <p>
              Coding in {user.basics.location.city}, {user.basics.location.region}
            </p>
          )}
          <ExperienceSection>
            <ExperienceNumber>{yearsOfExperience}+</ExperienceNumber>
            <ExperienceText>years of<br />experience</ExperienceText>
          </ExperienceSection>
          <LanguagesSection>
            <LanguagesTitle>Languages</LanguagesTitle>
            <LanguagesList>
              {user.languages.map((el, index) => (
                <LanguageTag key={index} $fluency={el.fluency}>
                  {el.language} · {el.fluency}
                </LanguageTag>
              ))}
            </LanguagesList>
          </LanguagesSection>
          <SocialLinks>
            {user.basics.profiles && user.basics.profiles.map((profile, index) => {
              const IconComponent = socialIcons[profile.network];
              if (!IconComponent) return null;
              return (
                <SocialLink
                  key={index}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  $color={socialColors[profile.network]}
                  title={profile.network}
                >
                  <IconComponent size={20} />
                </SocialLink>
              );
            })}
            <SocialLink
              href="https://t.me/yarikqx"
              target="_blank"
              rel="noopener noreferrer"
              $color={socialColors.Telegram}
              title="Telegram"
            >
              <SendAlt size={20} />
            </SocialLink>
          </SocialLinks>
        </div>
      </Header>
      <ButtonsContainer>
        <ViewResumeLink as={Link} to="/resume">
          <Document size={16} />
          <span>View Resume</span>
        </ViewResumeLink>
      </ButtonsContainer>
    </HeaderContainer>
  );
};

export default UserHeader;
