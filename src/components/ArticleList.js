import React from "react";
import Article from './Article'

function ArticleList(props) {
   let articleList = props.posts.map((article)=>
   <Article title= {article.title} date= {article.date} preview = {article.preview} minutes = {article.minutes} key = {article.id} />)
   return (
       <main>
           {articleList}
       </main>
   )
}

export default ArticleList; 