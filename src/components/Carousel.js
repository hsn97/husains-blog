import React from "react"
import Title from "./Title"
import services from "../constants/services"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"

const Carousel = () => {
  const data = useStaticQuery(
    graphql`
    {
      allContentfulBook(
        sort: {fields: createdAt, order: DESC}, limit:3, filter: {featured: {eq: false}}) {
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
        <div className="section-title">
            <Title title="Previous Reads"></Title>
        </div> 
        <div className="carousel"style={{
              display:'grid', 
              gridTemplateColumns: '33% 33% 33%', 
              alignItems:'center', 
              padding:'0.5em',
              margin:'0.5em',
              marginTop:'-6.33em',
              borderRadius:'5px',
              gridTemplateColumns: 'repeat(4, 1fr)',
              textAlign:'center'      
              }}>
        {data.allContentfulBook.edges.map(edge => {
            return(
            <div className="section">               
                <Link to={`/books/${edge.node.slug}`}>
                    <div className="child-cover">          
                    <Image         
                        style={{ margin: '1rem', maxHeight: '30em' }}
                        imgStyle={{ objectFit: 'contain' }}
                        fluid={edge.node.bookCover.fluid}>
                    </Image>
                    </div>
                </Link>  
            </div>     
            )
        })}
                <Link to='/books/' className="btn">ALL BOOKS</Link>
        </div>
    </React.Fragment>
    )
}

export default Carousel
