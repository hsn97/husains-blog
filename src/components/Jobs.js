import React from "react"
import Title from "./Title"
import { FaGripLinesVertical } from "react-icons/fa"
import { MdSecurity } from "react-icons/md"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
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
        <>
          
        </>
      )
    },
  },
}

const query = graphql`
  {
    allContentfulJob(sort: {order: DESC, fields: createdAt}) {
      nodes {
        contentful_id
        jobPosition
        companyName
        employmentDate
        description {
          raw
        }
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)

  const{
    allContentfulJob:{nodes:jobs},
  } = data
  const [value, setValue] = React.useState(0)
  const{companyName, jobPosition, employmentDate, description} = jobs[value]
  
  return <section className="section jobs">
    <div className="section-title">
      <Title title="experience"></Title>
    </div>
    <div className="jobs-center">
    {/*btn Container*/}
    <div className="btn-container">
      {jobs.map((item,index)=>{
      return<button 
      key={item.contenful_id}
      onClick={()=> setValue(index)} 
      className={`job-btn ${index === value && 
        "active-btn"}`}
      >
        {item.companyName}
      </button>
      })}
    </div>
{/* Job Info */}
<article className="job-info">
  <h3>{jobPosition}</h3>
  <h4>{companyName}</h4>
  <p className="job-date">{employmentDate}</p>
  <div className="job-desc">
    <MdSecurity size={150} className="job-icon"></MdSecurity>
    {renderRichText(description)}
  </div>
</article>

    </div>
  </section>
}

export default Jobs
