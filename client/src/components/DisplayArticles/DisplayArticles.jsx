import React, { useEffect, useState } from 'react'
import Article from '../Articles/Article'
import './DisplayArticle.css'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
const DisplayArticles = () => {
  let {id} = useParams(); 
  const [title1, setTitle1] = useState();
  const [title2, setTitle2] = useState();
  const [title3, setTitle3] = useState();
  const [title4, setTitle4] = useState();
  const [title5, setTitle5] = useState();

  const [link1, setLink1] = useState();
  const [link2, setLink2] = useState();
  const [link3, setLink3] = useState();
  const [link4, setLink4] = useState();
  const [link5, setLink5] = useState();

  const [description1, setDescription1] = useState();
  const [description2, setDescription2] = useState();
  const [description3, setDescription3] = useState();
  const [description4, setDescription4] = useState();
  const [description5, setDescription5] = useState();

  const [content1, setContent1] = useState();
  const [content2, setContent2] = useState();
  const [content3, setContent3] = useState();
  const [content4, setContent4] = useState();
  const [content5, setContent5] = useState();

  const [image1, setImage1] = useState();
  const [image2, setImage2] = useState();
  const [image3, setImage3] = useState();
  const [image4, setImage4] = useState();
  const [image5, setImage5] = useState();



  useEffect(()=>{

    const key = process.env.REACT_APP_SECRET_API_KEY
    const apiURL = `https://newsdata.io/api/1/news?apikey=${key}&language=en&category=${id===undefined?"top":id}`

    axios.get(apiURL).then(response=>{
      
      console.log(response);
      setTitle1(response.data.results[0].title)
      setTitle2(response.data.results[1].title)
      setTitle3(response.data.results[2].title)
      setTitle4(response.data.results[3].title)
      setTitle5(response.data.results[4].title)
      
      setDescription1(response.data.results[0].description)
      setDescription2(response.data.results[1].description)
      setDescription3(response.data.results[2].description)
      setDescription4(response.data.results[3].description)
      setDescription5(response.data.results[4].description)

      setImage1(response.data.results[0].image_url)
      setImage2(response.data.results[1].image_url)
      setImage3(response.data.results[2].image_url)
      setImage4(response.data.results[3].image_url)
      setImage5(response.data.results[4].image_url)
      
      setLink1(response.data.results[0].link)
      setLink2(response.data.results[1].link)
      setLink3(response.data.results[2].link)
      setLink4(response.data.results[3].link)
      setLink5(response.data.results[4].link)

      setContent1(response.data.results[0].content)
      setContent2(response.data.results[1].content)
      setContent3(response.data.results[2].content)
      setContent4(response.data.results[3].content)
      setContent5(response.data.results[4].content)
      
      // setAuthor1(response.data.articles[0].creator[0])
      // setAuthor2(response.data.articles[1].creator[0])
      // setAuthor3(response.data.articles[2].creator[0])
      // setAuthor4(response.data.articles[3].creator[0])
      
      // setPubDate1(response.data.articles[0].pubDate)
      // setPubDate2(response.data.articles[1].pubDate)
      // setPubDate3(response.data.articles[2].pubDate)
      // setPubDate4(response.data.articles[3].pubDate)
    })
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
    console.log("here");
  },[id])
  
  //gohan = "https://oyster.ignimgs.com/mediawiki/apis.ign.com/dragon-ball-fighterz/a/a1/Super_Gohan.png"
  const randomAd = () =>{
    let ad1 = "https://media0.giphy.com/media/ky8QnJeK2PI2HATkTq/200w.webp?cid=ecf05e47gk4m483zef3zha8oyl1uzzm5zxbq3kfyeasxqxcg&rid=200w.webp&ct=g"
    let ad2 = "https://media0.giphy.com/media/fPzHQIBWjiJMc/200.webp?cid=ecf05e47dyegua520ea80eaqrf67rih6yy6m0a0c1d0ojzhm&rid=200.webp&ct=g"
    let ad3 = "https://media1.giphy.com/media/YSk7b2efrNwhbDKSep/200.webp?cid=ecf05e47klax64q6ogrcfrw6jaq87isvrnk558odcvazeskk&rid=200.webp&ct=g"
    let ad4 = "https://media1.giphy.com/media/j6e8L4sG973sk/200.webp?cid=ecf05e47nh04pwk90djjt8tmrb4vq74v0i1g860urxwdjljd&rid=200.webp&ct=g"
    let ad5 = "https://media2.giphy.com/media/STqbgYqAENBH2gGt2S/200w.webp?cid=ecf05e47qq986hwyi53a9hcu46oit5yg4e4ow1hx8oa4tr74&rid=200w.webp&ct=g"
    let ads= [ad1,ad2,ad3, ad4, ad5];
    let random =  Math.floor(Math.random() * ads.length)
    return ads[random]
  }
  return (

    <div class="parent">
<div class="div1 border"> <Article title={title1} description={description1} image={image1} imageHeight="400px" link={link1} content={content1} /></div>
<div class="div2 border"> <Article title={title2} description={description2} image={image2} imageHeight="400px" link={link2} content={content2}/></div>
<div class="div3 border"> <Article title={title3} description={description3} image={image3} imageHeight="400px" link={link3}  ad={randomAd()} titleSize="30px" content={content3}/></div>
<div class="div4 border"> <Article title={title4} description={description4} image={image4} imageHeight="400px" link={link4} content={content4}/></div>
<div class="div5 border"> <Article title={title5} titleSize="30px" description={description5} image={image5} imageHeight="400px" link={link5}  ad={randomAd()} content={content5}/></div>
</div>
  )
}                                             

export default DisplayArticles