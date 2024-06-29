import { useEffect, useState } from "react"
import NewsItem from "./NewsItem";

const NewsBoarder = (category) => {
  const [articles,setarticles] =useState([]);
  useEffect(()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url).then(response=> response.json).then(data=>setarticles(data.articles));
  },[category])
  return (
    <div>
        <h2 className= "text-center">LATEST <span className= "badge bg-danger"> NEWS</span></h2>
        {articles.map((news,index)=>{
          return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
        })}
    </div>
  )
}

export default NewsBoarder
