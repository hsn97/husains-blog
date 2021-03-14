import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Carousel from "../components/Carousel"
import Jobs from "../components/Jobs"
import Books from "../components/Books"
import Blogs from "../components/Blogs"

export default ({ data }) => {


  const {allContentfulBlogPost: { nodes: blogs },
  } = data

  
  return (<Layout>
    <Hero />
    <Services />
    <Carousel />
    <Blogs blogs={blogs} title="Latest Blog Posts"
    showLink/>
  </Layout>
  )
}


export const query = graphql`
  {
    allContentfulBlogPost(sort: {fields: writtenOn, order: DESC}, limit: 1) {
      nodes {
        blogTitle
        readingTime
        id
        slug
        blogTitleCard {
          fluid {
          ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`