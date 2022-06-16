import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom" 
import { getPostsByCategory, getSingleCategory } from "./PostManager"


export const AllPostsByCategory = () => {

const { categoryId } = useParams()   
const [posts, setPosts] = useState([])
const [category, setCategory] = useState({})
const history = useHistory()
    useEffect(() => {
        getPostsByCategory(categoryId).then(data => {
            setPosts(data)
        })
    }, [])

    useEffect(() => {
        getSingleCategory(categoryId).then(data => {
            setCategory(data)
        })
    }, [])

    return (
            <>
        <article className="posts">
            <h1>Posts including {category.label}</h1>
            <button className="createButton"
                onClick={() => {
                    history.push({ pathname: "/posts/new" })
                }}
            >Add Post</button>
            {
                posts.map(post => {
                    return <section key={`post--${post.id}`} className="post">
                        <h2>{post.title}</h2>
                        {/* <div className="post__topic">Topic: {post.topic.label} </div> */}
                        <div className="post__difficultyLevel">Difficulty Level: {post.difficulty_level}</div>
                        <div className="post__footyUser">Created By: {post.footy_user.user.first_name} {post.footy_user.user.last_name}</div>
                        <button className="viewPost"
                onClick={() => {
                    history.push({ pathname: `/posts/${post.id}` })
                }}
            >View Post</button>
                   </section>
                })
            }
        </article>
        </>
    )
}