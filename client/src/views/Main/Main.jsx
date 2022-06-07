import React from 'react'
import DisplayArticles from '../../components/DisplayArticles/DisplayArticles'
import Download from '../../components/DownloadPdf/Download'
import NavLinks from '../../components/Navlinks/NavLinks'
import Title from '../../components/Title/Title'
import "./Main.css"

const Main = () => {
  
  return (
    <div>
      <div className='container'>
          <Title/>
          <NavLinks/>
        <DisplayArticles/>
    </div>
    {/* <div>
      <Download/>
    </div> */}
    </div>
  )
}

export default Main

