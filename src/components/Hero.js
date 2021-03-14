import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"


const Hero = () => {

  const data = useStaticQuery(
    graphql`
    {
      allContentfulAbout {
        nodes {
          image {
            fluid {
            ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  `
  )

  return(
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>I'm Husain</h1>
            <h4>Writer, Reader, Goalkeeper, Programmer</h4>
            <h4> and Public Speaker</h4>
            <SocialLinks/>
          </div>
        </article>
        <Image 
        style={{ height: "100%", width: "100%" }}
        imgStyle={{ objectFit: "contain" }}
        fluid={data.allContentfulAbout.nodes[0].image.fluid} className="hero-img"></Image>
      </div>
    </header>
  )
}


export default Hero
