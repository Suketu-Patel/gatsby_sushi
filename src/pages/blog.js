import React from "react"
import { Link,useStaticQuery,graphql } from "gatsby"


import Layout from "../components/layout"
import blogStyles from "./blog.module.scss"
import Head from "../components/head"

const BlogPage = () => {

    const data = useStaticQuery(
        graphql`
        query{
            allContentfulBlogPost(
                sort: {
                  fields: publishedDate,
                  order: DESC
                }
              ) {
                edges{
                  node{
                    title
                    publishedDate(formatString:"MMMM Do, YYYY")
                    slug
                  }
                }
              }
          }
        `
    )
    console.log(data)

    const list = data.allContentfulBlogPost.edges.map(
        (item)=>{
            return(
                <li key={item.node.title} className={blogStyles.post}>
                <Link to={"/blog/"+item.node.slug}>
                    <h2>{item.node.title}</h2>
                    <p>{item.node.publishedDate}</p>
                </Link>
                    
                </li>
            )
        }
    )

    return (
        <Layout>
            <Head title="Blogs"/>
            <h1>Blogs</h1>
            <ol className={blogStyles.posts}>
                {list}
            </ol>
        </Layout>
    )
}
export default BlogPage;





//OLD MARKDOWN FETCHING QUERY
// query{
//     allMarkdownRemark{
//       edges{
//         node{
//           frontmatter{
//             title
//             date
//           }
//           html
//           excerpt
//           fields {
//               slug
//           }
//         }
//       }
//     }
//   }