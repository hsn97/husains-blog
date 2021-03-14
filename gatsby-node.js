const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result1 = await graphql(`
    {
      blogs: allContentfulBlogPost {
        nodes {
          slug
        }
      }
    }
  `)

  if (result1.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result1.errors
    )
    return
  }

  result1.data.blogs.nodes.forEach(blog => {
    createPage({
      path: `/blog/${blog.slug}`,
      component: path.resolve(`src/templates/blog-template.js`),
      context: {
        slug: blog.slug,
      },
    })
  })


  const result2 = await graphql(`
      {
        books: allContentfulBook {
          nodes {
            slug
          }
        }
      }
    `)

    if (result2.errors) {
        reporter.panicOnBuild(
          `There was an error loading your blog posts`,
          result.errors
        )
        return
      }
    
    result2.data.books.nodes.forEach(books => {
        createPage({
            path: `/books/${books.slug}`,
            component: path.resolve(`src/templates/book-template.js`),
            context: {
            slug: books.slug,
            },
        })
        })

}


  
