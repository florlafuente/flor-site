import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import Title from "../../components/Title"
import  { PostWrapper, StyledLink, Date } from "./styles"

const PostPage =  ({ data: { mediumFeed: { title, content, date } } }) => {
  const createMarkup = () => ({__html: content })
  return (
    <Layout>
      <Title>{ title }</Title>
      <Date>{date}</Date>
      <PostWrapper dangerouslySetInnerHTML={createMarkup()} />
      <div style={{ padding: '20px 0' }}>
        <StyledLink to="/">← Volver</StyledLink>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    mediumFeed(id: {eq: $id}) {
      id
      title
      content
      date(formatString: "DD-MM-YY")
    }
  }
`

export default PostPage