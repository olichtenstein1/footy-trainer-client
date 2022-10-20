import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom" 
import "./AllPostsByCategory.css"
import { deletePost, getCurrentUser, getPostsByCategory, getSingleCategory } from "./PostManager"


export const AllPostsByCategory = () => {

const { categoryId } = useParams()   
const [posts, setPosts] = useState([])
const [category, setCategory] = useState({})
const [userId, setUser]  =useState({})
const history = useHistory()

const deleteThenUpdate = (postId) => {
    deletePost(postId)
        .then(() => getPostsByCategory(categoryId))
        .then((data) => setPosts(data))
}


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

    useEffect(() => {
        getCurrentUser(userId)
        .then(data => {
            setUser(data)
        })
    }, [])

    return (
            <>
        <article className="posts">
            <div className="postTitle">
            <h1>Posts including {category.label}</h1>
            </div>
            <button className="createButton"
                onClick={() => {
                    history.push({ pathname: `/posts/new/${categoryId}` })
                }}
            >Add Post</button>
            
            {
                posts.map(post => {
                    return <section key={`post--${post.id}`} className="post">
                        <h2>{post.title}</h2>
                        {/* <div className="post__topic">Topic: {post.topic.label} </div> */}
                        <div className="post__difficultyLevel">Difficulty Level: {post.difficulty_level}</div>
                        <div className="post__footyUser">Created By: {post.footy_user.user.first_name} {post.footy_user.user.last_name}</div>
                        {
                            userId.id==post.footy_user.id && 
                        <button className="deletePostButton"
                        onClick={() => {
                            deleteThenUpdate(post.id)
                        }}
                        
                        >Delete Post</button>
                    }

                        <button className="viewPostButton"
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