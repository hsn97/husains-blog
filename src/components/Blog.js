import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"

const Blog = ({blogTitle, readingTime, id, blogTitleCard,slug}) => {
  return <article className="blog">
      <Image fluid={blogTitleCard.fluid} className="blog-img"></Image>
      <div className="blog-info">
      <Link to={`/blog/${slug}`}>
        <h3 style={{color: "hsl(209, 35%, 30%)"}}>{blogTitle}</h3>
      </Link>
        <p className="blog-desc">
          Reading Time: {readingTime}
        </p>
      </div>
    
  </article>
}

Blog.propTypes = {}

export default Blog
