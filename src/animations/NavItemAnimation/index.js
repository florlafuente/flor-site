import { keyframes } from 'styled-components'

export const NavItemAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, -100px, 0);
  }
  100% {
    transform: translate3d(0, 0, 0)
  }
`