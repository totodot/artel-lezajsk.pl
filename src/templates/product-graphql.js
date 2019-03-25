import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    productsJson(slug: { eq: $slug }) {
      title
      description
      price
    
    }
  }
`

const Product = ({ data }) => {
  console.log(data)
  const product = data.productsJson

  return (
    <Layout>
      <div>
        <h1>{product.title}</h1>
        {/* <Image
        fluid={product.image.childImageSharp.fluid}
        alt={product.title}
        style={{ float: "left", marginRight: "1rem", width: 150 }}
      /> */}
        <p>{product.price}</p>
        <div dangerouslySetInnerHTML={{ __html: product.description }} />
      </div>
    </Layout>
  )
}

export default Product
