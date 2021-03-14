import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
// ...GatsbyImageSharpFluid

const Blog = ({
  data:{allContentfulBlogPost:{nodes:blogs}}
}) => {
  return <Layout>
  <div className="section">
    <section className="section-center">
      < Blogs blogs={blogs} title="All Blogs"></Blogs> 
    </section>
  </div>
</Layout>
}

export const query = graphql`
  {
    allContentfulBlogPost(sort: {fields: writtenOn, order: DESC}) {
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

export default Blog
