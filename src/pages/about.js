import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import Jobs from "../components/Jobs"

// ...GatsbyImageSharpFluid
const About = ({
  data: {
    about: {nodes},
  },
}) => {

  const{title, info,image} = nodes[0]
  return(<Layout>
    <section className="about-page">
      <div className="section-center about-center">
        <Image fluid={image.fluid}
        className="about-img"/>
        <article className="about-text">
          <Title title={title}/>
          <p>{info.info}</p>
        </article>

      </div>
    </section>
    <Jobs />
  </Layout>
  )
}


export const query = graphql`
  {
    about: allContentfulAbout {
      nodes {
        title
        info {
          info
        }
        image {
          fluid {
          ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default About
