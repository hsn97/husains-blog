import React from "react"

const Title = ({title}) => {
  return <div>
    <h2>{title || "Placeholder"}</h2>
    <div className="underline"></div>
  </div>
}

export default Title
