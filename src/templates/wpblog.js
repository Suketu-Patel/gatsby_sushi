import React from 'react'
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import Head from "../components/head"

export const query = graphql `
query($slug: String!){
    wordpressPost(slug: {eq: $slug}){
      title
      date(formatString: "MMMM Do, YYYY")
      content
    }
  }
`

const WpBlog = (props) => {
    return (
        <Layout>
          <Head title={props.data.wordpressPost.title}/>
            <h1 dangerouslySetInnerHTML={{__html: props.data.wordpressPost.title}}></h1>
            <p>{props.data.wordpressPost.date}</p>
            <div dangerouslySetInnerHTML={{__html: props.data.wordpressPost.content}}></div>
        </Layout>
    )
}

export default WpBlog