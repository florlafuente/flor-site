/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const PostTemplate = path.resolve("./src/templates/Post")

  return graphql(
    `query GetAllPosts {
      allMediumFeed {
        edges {
          node {
            slug,
            id,
            title,
            content
          }
        }
      }
    }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMediumFeed.edges
    posts.forEach(post => {
      createPage({
        path: `/post/${post.node.slug}`,
        component: PostTemplate,
        context: {
          id: post.node.id,
          slug: post.node.slug,
          title: post.node.title,
          content: post.node.content
        },
      })
    })
  })
}

