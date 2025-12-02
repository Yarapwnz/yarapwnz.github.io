import styled, { keyframes } from 'styled-components'

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
  align-items: start;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

export const ProjectCard = styled.div`
  background-color: #1a1a1a;
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid #393939;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  animation: ${fadeInUp} 0.5s ease forwards;
  animation-delay: ${props => props.$index * 0.1}s;
  opacity: 0;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
    border-color: ${props => props.$accentColor || '#525252'};
  }
`

export const ProjectHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
`

export const ProjectIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: ${props => props.$gradient || 'linear-gradient(135deg, #0f62fe, #78a9ff)'};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    fill: white;
  }
`

export const ProjectInfo = styled.div`
  flex: 1;
  min-width: 0;
`

export const ProjectTitle = styled.h4`
  font-weight: 700;
  font-size: 1.25rem;
  color: #f4f4f4;
  margin-bottom: 0.25rem;
`

export const ProjectCategory = styled.span`
  display: inline-block;
  font-size: 0.75rem;
  color: ${props => props.$color || '#78a9ff'};
  background-color: ${props => props.$bgColor || 'rgba(120, 169, 255, 0.15)'};
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-weight: 500;
`

export const ProjectDescription = styled.p`
  color: #c6c6c6;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  flex: 1;
`

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  margin-top: auto;
`

export const TechTag = styled.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  background-color: #262626;
  color: #a8a8a8;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid #393939;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: #393939;
    color: #f4f4f4;
  }
`

export const ShowMoreTech = styled.button`
  background: none;
  border: none;
  color: #78a9ff;
  font-size: 0.75rem;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  transition: color 0.2s ease;

  &:hover {
    color: #a6c8ff;
  }
`

export const StoreLinks = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #393939;
`

export const StoreLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.5rem 0.75rem;
  background-color: ${props => props.$bgColor || '#262626'};
  color: #f4f4f4;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 500;
  text-decoration: none;
  transition: transform 0.2s ease, background-color 0.2s ease;

  svg {
    fill: currentColor;
  }

  &:hover {
    transform: translateY(-2px);
    background-color: ${props => props.$hoverColor || '#393939'};
  }
`