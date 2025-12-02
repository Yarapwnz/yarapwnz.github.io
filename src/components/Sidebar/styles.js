import styled from 'styled-components';

export const SidebarContainer = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  width: 180px;
  height: 100vh;
  background-color: #161616;
  border-right: 1px solid #262626;
  padding: 1.5rem 0;
  z-index: 100;

  @media (max-width: 640px) {
    display: none;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const NavItem = styled.li`
  position: relative;
`;

export const NavLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem 1.25rem;
  text-decoration: none;
  color: ${props => props.$isActive ? '#f4f4f4' : '#a8a8a8'};
  background-color: ${props => props.$isActive ? 'rgba(255, 255, 255, 0.05)' : 'transparent'};
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
    color: #f4f4f4;
  }
`;

export const ActiveIndicator = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: ${props => props.$color || '#0f62fe'};
  border-radius: 0 2px 2px 0;
`;

export const NavIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background-color: ${props => props.$isActive
    ? `${props.$color}20`
    : 'transparent'};
  transition: all 0.2s ease;

  svg {
    fill: ${props => props.$isActive ? props.$color : '#a8a8a8'};
    transition: fill 0.2s ease;
  }

  ${NavLink}:hover & {
    background-color: ${props => `${props.$color}20`};

    svg {
      fill: ${props => props.$color};
    }
  }
`;

export const NavText = styled.span`
  font-size: 0.9rem;
  font-weight: ${props => props.$isActive ? '600' : '400'};
  transition: all 0.2s ease;
`;
