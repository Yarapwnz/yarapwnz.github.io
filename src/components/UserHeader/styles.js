import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 640px) {
    display: ${({ isHome }) => (!isHome ? 'none' : 'flex')};
    flex-direction: column;
  }
`;

export const Header = styled.div`
  display: flex;
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 200px;
  height: auto;
  object-fit: cover;
  margin-right: 1rem;
  border-radius: 8px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #393939;
  transition: background-color 0.3s ease, transform 0.2s ease;

  svg {
    fill: #f4f4f4;
    transition: fill 0.3s ease;
  }

  &:hover {
    transform: translateY(-3px);
    background-color: ${props => props.$color || '#525252'};

    svg {
      fill: white;
    }
  }
`;

export const ViewResumeLink = styled.a`
  display: flex;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 2px solid #2ecc40;
  background-color: rgba(46, 204, 64, 0.3);
  transition: background-color 250ms ease, transform 0.2s ease;
  border-radius: 4px;
  cursor: pointer;
  color: #f4f4f4;
  font-size: 1rem;
  &:hover {
    background-color: #2ecc40;
    transform: translateY(-2px);
  }
  svg {
    fill: white;
  }
`;

export const LanguagesSection = styled.div`
  margin-top: 1rem;
`;

export const LanguagesTitle = styled.h3`
  font-size: 0.875rem;
  color: #c6c6c6;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const LanguagesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const ExperienceSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.75rem;
  margin-bottom: 0.5rem;
`;

export const ExperienceNumber = styled.span`
  font-size: 2rem;
  font-weight: bold;
  color: #2ecc40;
  margin-right: 0.5rem;
  line-height: 1;
`;

export const ExperienceText = styled.span`
  font-size: 0.875rem;
  color: #c6c6c6;
  line-height: 1.2;
`;

export const LanguageTag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  background-color: #393939;
  border-radius: 16px;
  font-size: 0.875rem;
  color: #f4f4f4;

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    background-color: ${props => {
      switch(props.$fluency) {
        case 'Native': return '#2ecc40';
        case 'Fluent': return '#0f62fe';
        case 'Intermediate': return '#f1c21b';
        default: return '#78a9ff';
      }
    }};
    border-radius: 50%;
    margin-right: 0.5rem;
  }
`;