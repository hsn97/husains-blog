import React from "react"
import Title from "./Title"
import Book from "./Book"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import { FaAlignCenter } from "react-icons/fa"


const Books = () => {
  const data = useStaticQuery(
    graphql`
    {
      allContentfulBook(
        sort: {fields: createdAt, order: DESC}) {
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

  return (
    <div className="section">
      <div className="section-title">
      <Title title="Book Notes"></Title>
      </div>
      <div className="book">
        {data.allContentfulBook.edges.map(edge => {
          return (
            <React.Fragment>
            <div classname="card" 
            style={{
              display:'grid', 
              gridTemplateColumns: '60% 40%', 
              alignItems:'center', 
              padding:'0.5em',
              margin:'1em',
              borderRadius:'5px',
              backgroundColor:'hsl(28, 42%, 94%)',             
              }}>
              <Link to={`/books/${edge.node.slug}`}>
                <div class="card-cover">          
                  <Image         
                    style={{ margin: '1rem', maxHeight: '25em', align: 'center' }}
                    imgStyle={{ objectFit: 'contain' }}
                    fluid={edge.node.bookCover.fluid}>
                  </Image>
                </div>
              </Link>
              <Link to="/books/">
                <div class="card-text" style={{textAlign:'center'}}>
                  <p>{edge.node.title}</p>
                    <div className="underline"></div>
                    <p>
                      Rating - {edge.node.rating}/5
                    </p>
                  <div className="button" style={{fontSize:'0.75em'}}>
                    <Link to={`/books/${edge.node.slug}/`}>Read The Notes</Link>
                  </div>
                </div>
              </Link>
                
              </div>
              </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}

export default Books
