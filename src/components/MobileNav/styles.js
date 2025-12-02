import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '@carbon/react';

export const Container = styled.div`
  display: none;
  @media (max-width: 640px) {
    display: block;
  }
`;

export const Spacer = styled.div`
  height: 56px;
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 56px;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: #161616;
  border-bottom: 1px solid #393939;
`;

export const NavLink = styled(Link)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-decoration: none;
  background-color: ${props => props.$isActive ? '#262626' : 'transparent'};

  &:hover {
    background-color: #262626;
  }
`;

export const NavButton = styled(Button)`
  min-height: 56px !important;
  width: 100%;
  justify-content: center;
  background-color: transparent !important;
  border: none !important;

  &:hover {
    background-color: #262626 !important;
  }

  svg {
    fill: #f4f4f4 !important;
  }
`;