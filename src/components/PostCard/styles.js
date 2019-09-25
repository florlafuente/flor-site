import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const StyledLink = styled(Link)`
  text-decoration: none;
`

export const CardWrapper = styled.div`
  align-items: flex-end;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  height: 300px;
  margin: 40px auto;
  padding: 30px;
  position: relative;
  width: 300px;
`

export const ThumbnailImg = styled.img`
  border-radius: 5px;
  height: auto;
  overflow: hidden;
  opacity: 0.7;
  object-fit: cover;
  height: 300px;
  width: 100%;
`

export const CardBg = styled.div`
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  border-radius: 5px;
  bottom: 0;
  background: linear-gradient(to left, #5FC3E4, #E55D87);
  opacity: 0.7;
  left: 0;
  position: absolute;
  right: 0;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  top: 0;

  :hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    opacity: 0.8;
  }
`

export const Title = styled.div`
  color: black;
  font-family: 'Poppins', sans-serif;
  font-size: 0.8em;
  font-weight: 500;
  letter-spacing: 3.5px;
  line-height: 1.5;
  text-decoration: none;
  text-transform: uppercase;
  z-index: 2;
`
