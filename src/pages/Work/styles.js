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

export const Timeline = styled.ul`
  position: relative;
  padding-left: 2rem;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, #2ecc40, #0f62fe);
  }
`

export const WorkItem = styled.li`
  position: relative;
  margin-bottom: 2rem;
  padding-left: 1.5rem;
  animation: ${fadeInUp} 0.5s ease forwards;
  animation-delay: ${props => props.$index * 0.1}s;
  opacity: 0;

  &::before {
    content: '';
    position: absolute;
    left: -2.4rem;
    top: 0.5rem;
    width: 12px;
    height: 12px;
    background-color: #2ecc40;
    border-radius: 50%;
    border: 2px solid #262626;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  &:hover::before {
    transform: scale(1.3);
    box-shadow: 0 0 10px rgba(46, 204, 64, 0.5);
  }
`

export const DateBadge = styled.span`
  display: inline-block;
  background-color: #393939;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  color: #c6c6c6;
  margin-bottom: 0.5rem;
`

export const WorkTitle = styled.h4`
  font-weight: bold;
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
  transition: color 0.3s ease;

  ${WorkItem}:hover & {
    color: #2ecc40;
  }
`

export const JobTitle = styled.span`
  font-weight: 600;
  color: #78a9ff;
`

export const Location = styled.span`
  color: #c6c6c6;
  font-size: 0.875rem;
`

export const Summary = styled.p`
  margin-top: 0.75rem;
  color: #c6c6c6;
  line-height: 1.6;
`