import styled from 'styled-components'
import { SideNav } from '@carbon/react'

export const StyledSideNav = styled(SideNav)`
  @media (max-width: 640px) {
    display: none;
  }
`