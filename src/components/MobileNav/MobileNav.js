import React from 'react'
import { useLocation } from 'react-router-dom'
import { User, Code, Portfolio, Education } from '@carbon/icons-react'

import { Container, Spacer, NavWrapper, NavButton, NavLink } from './styles'

const MobileNav = () => {
  const location = useLocation()

  return (
    <Container>
      <Spacer />
      <NavWrapper>
        <NavLink to="/" $isActive={location.pathname === '/'}>
          <NavButton
            hasIconOnly
            renderIcon={(props) => <User size={24} {...props} />}
            iconDescription="Me"
            tooltipPosition="bottom"
          />
        </NavLink>
        <NavLink to="/projects" $isActive={location.pathname === '/projects'}>
          <NavButton
            hasIconOnly
            renderIcon={(props) => <Code size={24} {...props} />}
            iconDescription="Projects"
            tooltipPosition="bottom"
          />
        </NavLink>
        <NavLink to="/work" $isActive={location.pathname === '/work'}>
          <NavButton
            hasIconOnly
            renderIcon={(props) => <Portfolio size={24} {...props} />}
            iconDescription="Work"
            tooltipPosition="bottom"
          />
        </NavLink>
        <NavLink to="/education" $isActive={location.pathname === '/education'}>
          <NavButton
            hasIconOnly
            renderIcon={(props) => <Education size={24} {...props} />}
            iconDescription="Education"
            tooltipPosition="bottom"
          />
        </NavLink>
      </NavWrapper>
    </Container>
  )
}

export default MobileNav