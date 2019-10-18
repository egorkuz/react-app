import React from "react"
import style from "./NewsList.module.css"
import {useEffect} from 'react'
import News from "./News/News"
import {connect} from 'react-redux'
import {getNewsData,addCommentaryForNews} from '../../redux/news-reducer'
import Preloader from "../common/Preloader/Preloader"

const NewsList = ({newsList,userId,userName,getNewsData,addCommentaryForNews}) => {
    useEffect(()=>{
        getNewsData()
    })
    let newsListToRender
    if(newsList){newsListToRender = newsList.map(newsData=><News userId={userId} userName={userName} addCommentaryForNews={addCommentaryForNews} newsDataToNewsComponent={newsData} />)}
    return (
        newsList?
        <section>
            {newsListToRender}
        </section>:<Preloader />
)}

let mapStateToProps = (state) => {
    return {
        newsList: state.newsPage.newsData,
        userId: state.auth.id,
        userName: state.auth.login
    }
    
}
const NewsListContain = connect(mapStateToProps,{addCommentaryForNews,getNewsData})(NewsList)

export default NewsListContain