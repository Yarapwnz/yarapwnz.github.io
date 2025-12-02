import styled from 'styled-components'
import { Content } from '@carbon/react'

export const StyledContent = styled(Content)`
  min-height: 100vh;
  @media (max-width: 640px) {
    margin-left: 0 !important;
  }
`