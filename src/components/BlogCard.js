import React from 'react'
import { FaMedium } from "react-icons/fa"

const BlogCard = (props) => {
    const {image, title, description, link} = props.blog
    return (
        <div className="blog-container">
            <div className="blog-handle">
                <div><FaMedium/>Medium</div>
                <span>
                    <a id="medium-link" rel="noopener noreferrer" target="_blank" href="https://medium.com/@reireynoso">@reireynoso</a>
                </span>
            </div>
            <img className="blog-image" src={image} alt={title}/>
            <h2 className="blog-title">{title}</h2>
            <p className="blog-description">{description}</p>
            <a rel="noopener noreferrer" id="medium-article-link" target="_blank" href={link}>Read the article on medium.com</a>
        </div>
    )
}

export default BlogCard