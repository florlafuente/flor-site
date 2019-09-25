import React from "react"
import Layout from "../../components/Layout"
import Title from "../../components/Title"
import  { PostWrapper, StyledLink } from "./styles"

const PostPage =  ({ pageContext }) => {
  const createMarkup = () => ({__html: pageContext.content })
  return (
    <Layout>
      <Title>{pageContext.title}</Title>
      <PostWrapper dangerouslySetInnerHTML={createMarkup()} />
      <div style={{ padding: '20px 0' }}>
        <StyledLink to="/">← Volver</StyledLink>
      </div>
    </Layout>
  )
}

export default PostPage