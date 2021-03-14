import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <main className="error-page">
      <div classname="error-container">
        <h1>I Don't think there's anything here </h1>
        <h1>ಠ_ಠ</h1>
        <Link to="/" className="btn">
          Back to Home
        </Link>
      </div>
    </main>
  )
}

export default Error
