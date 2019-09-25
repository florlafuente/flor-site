import React from "react"

import { CardWrapper, ThumbnailImg, CardBg, Title } from "./styles"

const PostCard = ({ post: { node: { title, slug, thumbnail } }}) => (
  <CardWrapper>
    <CardBg>
      <ThumbnailImg src={thumbnail} alt="Post thumbnail" />
    </CardBg>
    <Title>
      {title}
    </Title>
  </CardWrapper>
)

export default PostCard