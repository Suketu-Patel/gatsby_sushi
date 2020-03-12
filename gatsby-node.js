const path = require('path');

// module.exports.onCreateNode = ({ node, actions }) => {
//     const { createNodeField } = actions
//     if (node.internal.type === 'MarkdownRemark') {
//         const slug = path.basename(node.fileAbsolutePath, '.md');
//         createNodeField({
//             node,
//             name: 'slug',
//             value: slug
//         })
//     }
// }

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const blogTemplate = path.resolve('./src/templates/blog.js')
    const wpblogTemplate = path.resolve('./src/templates/wpblog.js')
    const response = await graphql(`
        query{
            allContentfulBlogPost {
                edges {
                    node {
                        slug
                    }
                }
            }  
        }
    `)
    const response2 = await graphql(`
        query {
            allWordpressPost{
                edges{
                    node{
                        slug
                    }
                }
            }
        }
    `)
    response.data.allContentfulBlogPost.edges.forEach((edge)=>{
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context : {
                slug: edge.node.slug
            }
        })
    })
    response2.data.allWordpressPost.edges.forEach((edge)=>{
        createPage({
            component: wpblogTemplate,
            path: `/blog/${edge.node.slug}`,
            context : {
                slug: edge.node.slug
            }
        })
    })
}