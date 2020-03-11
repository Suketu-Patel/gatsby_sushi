import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {
    return(
        <Layout>
        <Head title="Home"/>
            <h1>Hello,</h1>
            <h2>Commodo eu dolore labore exercitation est occaecat ad do anim et.</h2>
            <p>Need a developer? <Link to="/contact">Contact ashish</Link></p>
        </Layout>
    )
    
}
export default IndexPage;