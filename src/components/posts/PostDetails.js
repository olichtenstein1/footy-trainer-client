import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { useParams } from "react-router-dom"
import { getSinglePost } from "./PostManager"

export const PostDetails = () => {
    const { postId } = useParams()
    const [post, setPost] = useState({})


    useEffect(
        () => {
            document.cookie = "SameSite=None"
            getSinglePost(postId)
                .then(data => {
                    setPost(data)
                })

        }, []
    )


    return (
        <>
            <h2>{post.title} </h2>
            <h4>{post.topic?.label} </h4>

            <section className="postDetails">
                <div className="post__description">Description: {post.description} </div>
                <div className="post__howToSteps"> *Add How to Steps*</div>
                <div className="post__video_tutorial">
                    <iframe
                        src= {post.video_tutorial}
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        title="video"
                      />{" "}
                   </div>
                <div className="post__difficulty_level">Difficulty Level: {post.difficulty_level}</div>
            </section>
        </>
    )

}