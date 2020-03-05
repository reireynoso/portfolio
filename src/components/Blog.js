import React from 'react'
import HomeIcon from './HomeIcon';
import { FaMedium } from "react-icons/fa"

const Blog = () => {
    return(
        <div className="link-container">
            <HomeIcon/>
            <h1 className="blog-content-title">blogs</h1>
            <div className="blog-container">
                <p className="blog-handle">
                    <div><FaMedium/>Medium</div>
                    <span className="handle">@reireynoso</span>
                </p>
                <img className="blog-image" src="https://miro.medium.com/fit/c/2100/630/0*1JeHUV1wSFYeWTcU" alt=""/>
                <h2 className="blog-title">blog Title</h2>
                <p className="blog-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <a href="">Read the article on medium.com</a>
            </div>
        </div>
    )
}

export default Blog