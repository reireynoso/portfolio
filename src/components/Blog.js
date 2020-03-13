import React from 'react'
import HomeIcon from './HomeIcon';
import BlogCard from './BlogCard'
import information from '../information'

const Blog = () => {
    return(
        <>
        <HomeIcon/>
        <div className="link-container">
            <h1 className="blog-content-title">Blogs</h1>
            {
                information.blogs.map(blog => <BlogCard key={blog.title} blog={blog}/>)
            }
        </div>
        </>
    )
}

export default Blog