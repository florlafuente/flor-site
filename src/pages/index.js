import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Title from "../components/Title"
import PostGrid from "../components/PostGrid"
import PostCard from "../components/PostCard"

const IndexPage =  ({ data }) => {
  const posts = data.allMediumFeed.edges
  return (
    <Layout>
      <Title>Un bosque de bolsillo</Title>
      <PostGrid>
        {posts.map((post) => (
          <PostCard post={post} key={post.node.id} />
        ))}
      </PostGrid>
    </Layout>
  )
}


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
