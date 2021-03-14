import React from "react"
import Title from "./Title"
import Blog from "./Blog"
import { Link } from "gatsby"


const Blogs = ({blogs,title,showLink}) => {

  return(
  <section className="section blogs">
    <div className="section-title" style= {{marginTop:"-7rem"}}>
        <Title title={title}></Title>
    </div>
    <div className="section-center blog-center">
      {blogs.map((blog)=>{
        return<Blog key={blog.id} {...blog} />
      })}
    </div>
    {
      showLink && <Link to='/blog' className="btn center-btn">
        All Blog Posts
      </Link>
    }
  </section>
  )
}
export default Blogs
