import React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"

const NotFound = ()=>{
    return(
        <Layout>
            <h1>Page not found</h1>
            <img src="https://fab404.com/wp-content/uploads/2013/05/androiddev101404.jpg" alt="annoyed vader" width="400"></img>
            <p><Link to="/">Head home</Link></p>
        </Layout>
    )
}

export default NotFound