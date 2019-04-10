import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  console.log(data)
  const { markdownRemark, placeholderImage } = data // data.markdownRemark holds our post data
  const { frontmatter, html, thumbnail } = markdownRemark
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        {/* <Image
          fluid={frontmatter.thumbnail.childImageSharp.fluid}
          alt="dsadasd"
        />
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2> */}
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <Image
          fluid={frontmatter.thumbnail.childImageSharp.fluid}
          alt="dsadasd"
        />

        <Image
          fluid={placeholderImage.childImageSharp.fluid}
          alt="dsadasd"
        />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(frontmatter: { id: { eq: $id } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 10) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
