import React from 'react'
import BlogCard from './BlogCard'
import information from '../information'

const Blog = () => {
    return(
        <div className="link-container">
            <h1 className="blog-content-title">Blogs</h1>
            <div className="blogs">
                {
                    information.blogs.map(blog => <BlogCard key={blog.title} blog={blog}/>)
                }
            </div>
        </div>
    )
}

export default Blog