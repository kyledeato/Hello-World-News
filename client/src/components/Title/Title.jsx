import React from 'react'
import "./Title.css"
import { useParams } from 'react-router-dom'
const Title = () => {
  let {name} = useParams(); 
  return (
    <div>
        <h1 className='title'>HELLO WORLD NEWS</h1>
    </div>
  )
}

export default Title