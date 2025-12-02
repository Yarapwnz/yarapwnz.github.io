import styled, { keyframes } from 'styled-components'

export const ProfileLink = styled.li`
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  display: inline-block;
  font-size: 18px;
`

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const SkillCategory = styled.div`
  animation: ${fadeIn} 0.5s ease forwards;
  animation-delay: ${props => props.$index * 0.1}s;
  opacity: 0;
`

export const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
`

export const CategoryIcon = styled.span`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.$color || '#393939'};
  border-radius: 8px;

  svg {
    fill: white;
  }
`

export const CategoryTitle = styled.h4`
  font-size: 1rem;
  color: #f4f4f4;
  font-weight: 600;
`

export const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

export const SkillPill = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: ${props => props.$bgColor || '#393939'};
  color: ${props => props.$textColor || '#f4f4f4'};
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: default;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
`