import React from "react"
import { Wrapper } from "./styles"
import Footer from "../Footer"

const Layout = ({ children }) => (
  <Wrapper>
    { children }
    <Footer />
  </Wrapper>
)

export default Layout