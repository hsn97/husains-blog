import React from "react"
import Title from "./Title"
import services from "../constants/services"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"

const Services = () => {
  const featured = useStaticQuery(
    graphql`
    {
      allContentfulBook(
        sort: {fields: createdAt, order: DESC}, filter: {featured: {eq: true}}) {
        edges {
          node {
            author
            bookNote {
              raw
            }
            bookCover {
              fluid {
              ...GatsbyContentfulFluid
              }
            }
            title
            bookNumber
            slug
            rating
          }
        }
      }
    }
  `
  )
    return(
      <React.Fragment>
      {featured.allContentfulBook.edges.map(edge => {
        return(
        <div className="section">
          <div className="section-title">
          <Title title="Book I Just Finished Reading"></Title>
          </div>
          
            <div className="grid-container" style={{ marginBottom: '-3rem'}}>
            <Link to= {`/books/${edge.node.slug}`}>
              <div className="grid-child-text">
                <p>{edge.node.title} - {edge.node.author}</p>
                  <div className="underline"></div>
                <div className="featured-content">
                  <p>
                  Rating - {edge.node.rating}/5
                  </p>
                </div>
                <div className="read-more"
                style={{ marginTop: '5rem', fontSize: '1.25rem', color:"hsl(42, 98%, 84%" }}>
                  <p>
                  Click Here to Read the Book Notes
                  </p>
                </div>
              </div>
            </Link>
            <Link to={`/books/${edge.node.slug}`}>
              <div className="grid-child-cover">          
                <Image         
                  style={{ margin: '1rem', maxHeight: '28rem' }}
                  imgStyle={{ objectFit: 'contain' }}
                  fluid={edge.node.bookCover.fluid}>
                </Image>
              </div>
            </Link>  
            </div>     
        </div>
        )
      })}
      </React.Fragment>
    )
}

export default Services
