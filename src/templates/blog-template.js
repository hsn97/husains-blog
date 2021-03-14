import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import Title from "../components/Title"

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
      console.log(node)
      return (
        <img src={node.data.target.fluid.src}/>
      )
    },
  },
}

const ComponentName = ({data}) => {
  console.log(data)

  // const [value, setValue] = React.useState(0)
  // const {blogTitle, readingTime, blogTitleCard, blogContent} = blog[value]
  const{blogTitle} = data.blog
  const{blogContent} = data.blog
  return <Layout>
    <section className="blog-template">
      <div className="section-center">
      <div className="section-title">
            <Title title={blogTitle}></Title>
        </div>
        <article className="blog-content">{renderRichText(blogContent, options)}</article>
      </div>
    </section>
  </Layout>
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: contentfulBlogPost(slug: { eq: $slug }) {
      blogContent{
        raw
        references {
          ... on ContentfulAsset {
            # contentful_id is required to resolve the references
            contentful_id
            __typename
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      },
      blogTitle,
      readingTime,
      blogTitleCard {
        fluid {
        ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default ComponentName
