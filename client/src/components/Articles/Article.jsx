import React from 'react'
import "./Article.css"
const Article = props => {
  
  const {title, description, image, imageHeight, link, content ,ad, titleSize} = props

  const contentChar = (content) => {
    console.log(content);
    if (content.length > 200){
      
      return content.substring(0,200)
    } 
  }

  return (
    <div>
        <a className="article-links" href={link} target="_blank" rel="noreferrer"><h1 className='article-header' style={{ fontSize: `${titleSize}` }}>{title}</h1></a>
        {/* <h1 className='article-header'>Article Header</h1> */}
        {image? 
        <img src={image} className="image" alt="" style={{width: "100%", height: `${imageHeight}`}}/>:<></>}
        {/* <p className='description'>{description}</p>
        <br /> */}
        {content != null?
        <p className='description'>{contentChar(content)} <a href={link} target="_blank" rel="noreferrer" className="article-links">Read More</a></p>:
        <p className='description'>{description} <a href={link} target="_blank" rel="noreferrer" className="article-links">Read More</a></p>}
        {/* <img src={ad} alt="" /> */}
    </div>
  )
}

export default Article