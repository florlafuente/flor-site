import React from "react"

import { CardWrapper, ThumbnailImg, CardBg, Title, StyledLink } from "./styles"

const PostCard = ({ post: { node: { title, slug, thumbnail } }}) => (
  <StyledLink to={`/post/${slug}`}>
    <CardWrapper>
      <CardBg>
        <ThumbnailImg src={thumbnail} alt="Post thumbnail" />
      </CardBg>
      <Title>
        {title}
      </Title>
    </CardWrapper>
  </StyledLink>
)

export default PostCard