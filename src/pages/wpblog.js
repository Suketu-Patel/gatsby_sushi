import React from "react"
import { Link,useStaticQuery,graphql } from "gatsby"


import Layout from "../components/layout"
import blogStyles from "./blog.module.scss"
import Head from "../components/head"

const BlogPage = () => {

    const data = useStaticQuery(
        graphql`
        query {
            allWordpressPost{
              edges{
                node{
                  title
                  date(formatString:"MMMM Do, YYYY")
                  slug
                  content
                }
              }
            }
          }
        `
    )
    console.log(data)

    const list = data.allWordpressPost.edges.map(
        (item)=>{
            return(
                <li key={item.node.title} className={blogStyles.post}>
                <Link to={"/blog/"+item.node.slug}>
                    <h2 dangerouslySetInnerHTML={{__html: item.node.title}}></h2>
                    <p>{item.node.date}</p>
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