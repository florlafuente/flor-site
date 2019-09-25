import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/Layout"
import PostCard from "../components/PostCard"

const IndexPage =  ({ data }) => {
  const posts = data.allMediumFeed.edges
  return (
    <Layout>
      <Title>Un bosque de bolsillo</Title>
      <div>
        {posts.map((post) => (
          <PostCard post={post} key={post.node.id} />
        ))}
      </div>
    </Layout>
  )
}

const Title = styled.h1`
  border-bottom: 3px solid #febed9;
  font-family: 'Poppins', sans-serif;
  font-size: 1.6em;
  font-weight: 500;
  letter-spacing: 3.5px;
  line-height: 1.5;
  padding-bottom: 3px;
  text-transform: uppercase;
  text-align: center;
`

export const query = graphql`
  query GetAllPosts {
    allMediumFeed {
      edges {
        node {
          title
          thumbnail
          id
          slug
        }
      }
    }
  }
`

export default IndexPage
