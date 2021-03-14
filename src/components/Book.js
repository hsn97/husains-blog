import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"

const Book = ({title, bookNumber, bookNote, rating, bookCover,slug}) => {
  return <article className="blog">
      <Image fluid={bookCover.fluid} className="blog-img"></Image>
      <div className="blog-info">
      <Link to={`/books/${slug}`}>
        <h3 style={{color: "hsl(209, 35%, 30%)"}}>{title}</h3>
      </Link>
        <p className="blog-desc">
          Rating: {rating}/5
        </p>
      </div>
    
  </article>
}

Book.propTypes = {}

export default Book
