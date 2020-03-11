import React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"

const NotFound = ()=>{
    return(
        <Layout>
            <h1>Page not found</h1>
            <img src="./annoyed_vader.png" alt="annoyed vader" width="400"></img>
            <p><Link to="/">Head home</Link></p>
        </Layout>
    )
}

export default NotFound