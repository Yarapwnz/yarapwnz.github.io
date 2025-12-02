import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  User,
  Code,
  Portfolio,
  Education,
  Email
} from '@carbon/icons-react';

import {
  SidebarContainer,
  NavList,
  NavItem,
  NavLink,
  NavIcon,
  NavText,
  ActiveIndicator
} from './styles';

const items = [
  { name: 'Me', path: '/', icon: User, color: '#0f62fe' },
  { name: 'Projects', path: '/projects', icon: Code, color: '#8a3ffc' },
  { name: 'Work', path: '/work', icon: Portfolio, color: '#2ecc40' },
  { name: 'Education', path: '/education', icon: Education, color: '#f1c21b' },
  { name: 'Contact', path: '/contact', icon: Email, color: '#ff7eb6' },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <SidebarContainer>
      <NavList>
        {items.map((item) => {
          const isActive = location.pathname === item.path ||
            (location.pathname === '/' && item.path === '/');
          const IconComponent = item.icon;

          return (
            <NavItem key={item.name}>
              <NavLink
                as={Link}
                to={item.path}
                $isActive={isActive}
                $color={item.color}
              >
                {isActive && <ActiveIndicator $color={item.color} />}
                <NavIcon $isActive={isActive} $color={item.color}>
                  <IconComponent size={20} />
                </NavIcon>
                <NavText $isActive={isActive}>{item.name}</NavText>
              </NavLink>
            </NavItem>
          );
        })}
      </NavList>
    </SidebarContainer>
  );
};

export default Sidebar;