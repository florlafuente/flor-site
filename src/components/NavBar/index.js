import React from 'react'
import { Wrapper, StyledLink } from './styles'
import { Link } from 'gatsby'

const NavBar = () => (
  <Wrapper>
    <div>
      <Link to="/">Home</Link>
    </div>
    <div>
      <StyledLink to="/">
        Sección 1
      </StyledLink>
      <StyledLink to="/">
        Sección 2
      </StyledLink>
      <StyledLink to="/">
        Sección 3
      </StyledLink>
    </div>
  </Wrapper>
)



export default NavBar