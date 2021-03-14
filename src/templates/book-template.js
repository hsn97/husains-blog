import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import Title from "../components/Title"
import Image from "gatsby-image"

import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const Bold = ({ children }) => <span className="bold">{children}</span>
const Text = ({ children }) => <p className="align-center">{children}</p>

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.EMBEDDED_ASSET]: node => {
      return (
        <img src={node.data.target.fluid.src}/>
      )
    },
  },
}

const ComponentName = ({data}) => {

  // const [value, setValue] = React.useState(0)
  // const {bookTitle, readingTime, bookTitleCard, bookContent} = book[value]
  const{title} = data.book
  const{bookNote} = data.book
  const{author} = data.book
  const{rating} = data.book
  const{bookCover} = data.book
  return <Layout>
    <section className="blog-template">
      <div className="section-center">
        <div className="grid-container">
              
              <div className="grid-child-cover">          
                <Image         
                  style={{ margin: '1rem', maxHeight: '15em' }}
                  imgStyle={{ objectFit: 'contain' }}
                  fluid={bookCover.fluid}>
                </Image>
              </div>
              <div className="grid-child-text">
                <p>{title} - {author}</p>
                  <div className="underline"></div>
                <div className="featured-content">
                  <p>
                  Rating - {rating}/5
                  </p>
                </div>
              </div>
            </div>
        <article className="blog-content">{renderRichText(bookNote)}</article>
      </div>
    </section>
  </Layout>
}

export const query = graphql`
  query GetSinglebook($slug: String) {
    book: contentfulBook(slug: { eq: $slug }) {
      bookNote{
        raw
      },
      title,
      rating,
      slug,
      author,
      bookCover {
        fluid {
        ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default ComponentName
