import React from "react"
import styled from "styled-components"

import { Link } from "gatsby"

export const StyledLink = styled(Link)`
  color: black;
  border-bottom: 3px solid #febed9;
  font-family: 'Poppins', sans-serif;
  padding: 3px;
  text-decoration: none;
`

export const PostWrapper = styled.article`
  border-bottom: 3px solid #febed9;
  box-sizing: border-box;
  color: black;
  font-family: 'Merriweather', serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 2;
  margin: 0 auto;
  max-width: 500px;
  padding: 9px 0 3px;
  width: 100%;

  & > figure {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0;
  }

  & > figure > img {
    max-width: 500px;
   object-fit: contain;
  }

  & > p > a, & > blockquote > a {
    color: black;
    border-bottom: 3px solid #febed9;
    padding: 3px;
    text-decoration: none;
  }

  & > p:first-of-type::first-letter {
    font-weight: bold;
    color: #febed9;
    padding: 0 6px 0 0;
    font-size: 3.38rem;
    line-height: 0.85;
    float: left;
    margin-top: 10px;
  }
`

export const Date = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 0.8rem;
  text-align: center;
`