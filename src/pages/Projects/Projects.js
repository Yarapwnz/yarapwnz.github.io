import React, { useState } from 'react';
import {
  Plane,
  Calendar,
  FaceSatisfied,
  Hospital,
  Application,
  Apple,
  PlayFilledAlt
} from '@carbon/icons-react';
import Layout from '../../components/Layout';
import { SectionTitle } from '../../styles';
import {
  ProjectsGrid,
  ProjectCard,
  ProjectHeader,
  ProjectIcon,
  ProjectInfo,
  ProjectTitle,
  ProjectCategory,
  ProjectDescription,
  TechStack,
  TechTag,
  ShowMoreTech,
  StoreLinks,
  StoreLink
} from './styles';

const categoryConfig = {
  'Traveling': {
    icon: Plane,
    gradient: 'linear-gradient(135deg, #0f62fe, #78a9ff)',
    color: '#78a9ff',
    bgColor: 'rgba(120, 169, 255, 0.15)',
    accentColor: '#0f62fe'
  },
  'Booking': {
    icon: Calendar,
    gradient: 'linear-gradient(135deg, #8a3ffc, #be95ff)',
    color: '#be95ff',
    bgColor: 'rgba(190, 149, 255, 0.15)',
    accentColor: '#8a3ffc'
  },
  'Social app': {
    icon: FaceSatisfied,
    gradient: 'linear-gradient(135deg, #ff7eb6, #ffafd2)',
    color: '#ff7eb6',
    bgColor: 'rgba(255, 126, 182, 0.15)',
    accentColor: '#ff7eb6'
  },
  'Healthcare': {
    icon: Hospital,
    gradient: 'linear-gradient(135deg, #2ecc40, #6fdc6f)',
    color: '#2ecc40',
    bgColor: 'rgba(46, 204, 64, 0.15)',
    accentColor: '#2ecc40'
  },
  'Medical': {
    icon: Hospital,
    gradient: 'linear-gradient(135deg, #fa4d56, #ff8389)',
    color: '#fa4d56',
    bgColor: 'rgba(250, 77, 86, 0.15)',
    accentColor: '#fa4d56'
  },
  'Utilities': {
    icon: Application,
    gradient: 'linear-gradient(135deg, #f1c21b, #fddc69)',
    color: '#f1c21b',
    bgColor: 'rgba(241, 194, 27, 0.15)',
    accentColor: '#f1c21b'
  },
  'default': {
    icon: Application,
    gradient: 'linear-gradient(135deg, #525252, #8d8d8d)',
    color: '#a8a8a8',
    bgColor: 'rgba(168, 168, 168, 0.15)',
    accentColor: '#525252'
  }
};

const MAX_VISIBLE_TECH = 6;

const googlePlayLinks = {
  'Huddex': 'https://play.google.com/store/apps/details?id=com.huddextech.hudder',
  'Novello': 'https://play.google.com/store/apps/details?id=com.novellohealthcare',
  'Good Life Sorted': 'https://play.google.com/store/apps/details?id=com.goodlifesorted',
  'conexwest': 'https://play.google.com/store/apps/details?id=com.conexwest.production_resource'
};

const isAppStoreLink = (url) => url && url.includes('apple.com');
const isPlayStoreLink = (url) => url && url.includes('play.google.com');

const ProjectCardComponent = ({ project, index }) => {
  const [showAllTech, setShowAllTech] = useState(false);
  const config = categoryConfig[project.summary] || categoryConfig['default'];
  const IconComponent = config.icon;

  const allTech = [...(project.languages || []), ...(project.libraries || [])];
  const visibleTech = showAllTech ? allTech : allTech.slice(0, MAX_VISIBLE_TECH);
  const hiddenCount = allTech.length - MAX_VISIBLE_TECH;

  const appStoreUrl = isAppStoreLink(project.url) ? project.url :
                      isAppStoreLink(project.website) ? project.website : null;
  const playStoreUrl = isPlayStoreLink(project.url) ? project.url :
                       isPlayStoreLink(project.website) ? project.website :
                       googlePlayLinks[project.name] || null;

  const hasStoreLinks = appStoreUrl || playStoreUrl;

  return (
    <ProjectCard $index={index} $accentColor={config.accentColor}>
      <ProjectHeader>
        <ProjectIcon $gradient={config.gradient}>
          <IconComponent size={24} />
        </ProjectIcon>
        <ProjectInfo>
          <ProjectTitle>{project.name}</ProjectTitle>
          <ProjectCategory $color={config.color} $bgColor={config.bgColor}>
            {project.summary}
          </ProjectCategory>
        </ProjectInfo>
      </ProjectHeader>

      {project.description && (
        <ProjectDescription>{project.description}</ProjectDescription>
      )}

      <TechStack>
        {visibleTech.map((tech, j) => (
          <TechTag key={j}>{tech}</TechTag>
        ))}
        {!showAllTech && hiddenCount > 0 && (
          <ShowMoreTech onClick={() => setShowAllTech(true)}>
            +{hiddenCount} more
          </ShowMoreTech>
        )}
        {showAllTech && allTech.length > MAX_VISIBLE_TECH && (
          <ShowMoreTech onClick={() => setShowAllTech(false)}>
            Show less
          </ShowMoreTech>
        )}
      </TechStack>

      {hasStoreLinks && (
        <StoreLinks>
          {appStoreUrl && (
            <StoreLink
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              $bgColor="rgba(0, 0, 0, 0.8)"
              $hoverColor="rgba(0, 0, 0, 1)"
            >
              <Apple size={16} />
              App Store
            </StoreLink>
          )}
          {playStoreUrl && (
            <StoreLink
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              $bgColor="rgba(52, 168, 83, 0.2)"
              $hoverColor="rgba(52, 168, 83, 0.4)"
            >
              <PlayFilledAlt size={16} />
              Google Play
            </StoreLink>
          )}
        </StoreLinks>
      )}
    </ProjectCard>
  );
};

const Projects = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Projects</SectionTitle>
        <ProjectsGrid>
          {user.projects.map((project, i) => (
            <ProjectCardComponent key={i} project={project} index={i} />
          ))}
        </ProjectsGrid>
      </div>
    </Layout>
  );
};

export default Projects;