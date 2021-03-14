import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Books from "../components/Books"
// ...GatsbyImageSharpFluid

const BooksPage = () => {
  return <Layout>
    <Books />
  </Layout>
}

export default BooksPage
