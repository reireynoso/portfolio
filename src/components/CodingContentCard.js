import React from 'react'
import {DiRor, DiRuby, DiJavascript1, DiGithubBadge, DiReact} from 'react-icons/di'
import {AiOutlineYoutube} from 'react-icons/ai'

const CodingContentCard = ({content: {title, image, link, topic}}) => {
    const determineProgrammingIcon = () => {
        switch(topic){
            case "javascript" :
                return <DiJavascript1  size={48}/>
            case "ruby" :
                return <DiRuby size={48}/>
            case "rails" :
                return <DiRor size={48}/>
            case "react":
                return <DiReact size={48}/>
            default:
                return <DiGithubBadge size={48}/>
        }
    }

    const determineIcon = () => {
        if(image){
            return <AiOutlineYoutube size={24}/>
        }
        return <DiGithubBadge size={24}/>
    }

    return (
        <div className="coding-content-card">
            <div className="coding-content__container">
                {
                    image ? <img className="coding-content__image" src={image} alt={title}/> : <div className="content-icon-container">{determineProgrammingIcon()}</div>
                }
                <div className="coding-content__title">
                    {title}
                </div>   
            </div>
            <a rel="noopener noreferrer" className="coding-content__link" target="_blank" href={link}>
                {image ? "Video" : "Repository"}
                {determineIcon()}
            </a>
        </div>
    )
}
export default CodingContentCard