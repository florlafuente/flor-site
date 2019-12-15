import styled from 'styled-components'
import { Link } from 'gatsby'
import { NavItemAnimation } from '../../animations/NavItemAnimation'


export const Wrapper = styled.div`
  align-items: center;
  background-color: white;
  border: 1px solid red;
  display: flex;
  font-family: 'Poppins', sans-serif;
  height: 100px;
  justify-content: space-between;
  left: 0;
  padding: 0 20px;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;
`

export const StyledLink = styled(Link)`
  animation-duration: 0.5s;
  transition-delay: 0.1s;
  transition-duration: 0.4s;
  animation-name: ${NavItemAnimation};
  animation-fill-mode: both;
  padding: 10px;
  text-decoration: none;

  &:nth-child(2) {
    animation-delay: 0.5s;
  }

  &:nth-child(3) {
    animation-delay: 1s;
  }
`