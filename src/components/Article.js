import React from 'react'

function Article(props) {
    const {title, date, preview, minutes} = props
    let icon = ''
    if (minutes < 30){
        for (let i= 0; i < Math.ceil(minutes/5); i++){
            icon += '☕️'
        }
    }
    else {
        for (let i = 0; i < Math.ceil(minutes/10); i++){
            icon += '🍱'
        }
    }
    console.log(minutes)
    return (
        <article>
            <h3>{title}</h3>
            <small>{date ? date : "January 1, 1970"}</small>
            <p>{icon} {minutes} minute read</p>
            <p>{preview}</p>
        </article>
    )
}

export default Article;