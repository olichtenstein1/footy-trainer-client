import React, { useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import { getSinglePost, getTopics } from "./PostManager"

export const PostEdit = () => {
    const [post, assignPost] = useState({})
    const [topics, setTopics] = useState([])
    const { postId } = useParams()
    const history = useHistory()

    useEffect(
        () => {
            getSinglePost(postId)
                .then(data => {
                    assignPost(data)
                })

        }, [postId]
    )

    useEffect(() => {
        getTopics()
        .then((data => {
            setTopics(data)
        }))


    }, [])


    const changePostState = (p) => {
        const newPost = { ...post }
        if (p.target.name === "topics"){
            if (newPost.topics.includes(parseInt(p.target.id)))
            {
                const index = newPost.topics.indexOf(parseInt(p.target.id))
                newPost.topics.splice(index, 1)
            } else {newPost.topics.push(parseInt(p.target.id))}
        } else {
        newPost[p.target.name] = p.target.value
    }
    assignPost(newPost)
    }


    return (
        <form className="postEditForm">
            <h2 className="postEditForm_title">Edit Post </h2>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="title"> Title: </label>
                    <input type="text" name="title" required autoFocus className="form-control"
                        value={post.title}
                        onChange={changePostState}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <input type="text" name="description" required autoFocus className="form-control"
                        value={post.description}
                        onChange={changePostState}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="topic">Topics:</label>

                    {topics.map(
                        topic => {
                            return <> <label>
                                {
                                    topic.label
                                }
                            </label>
                                <input type="checkbox" id={topic.id} name="topics" autoFocus className="form-control"

                                    onChange={changePostState}
                                /> </>

                        }
                    )}

                </div>
            </fieldset>


            <fieldset>
                <div className="form-group">
                    <label htmlFor="difficulty_level">Difficulty Level: </label>
                    <input type="number" name="difficulty_level" min={1} max={10} required autoFocus className="form-control"
                        value={post.difficulty_level}
                        onChange={changePostState}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="video_tutorial">Video Tutorial: </label>
                    <input type="url" name="video_tutorial" required autoFocus className="form-control"
                        value={post.video_tutorial}
                        onChange={changePostState}
                    />
                </div>
            </fieldset>

            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()

                    const newPost = {
                        difficulty_level: post.difficulty_level,
                        description: post.description,
                        title: post.title,
                        video_tutorial: post.video_tutorial,
                        topics: post.topics,
                        category: post.category
                    }
                    updatePost(newPost, postId)
                        .then(() => history.push(`/posts/post_by_category/${newPost.category}`))

                }}
                className="buttonCreate">Update</button>
        </form>
    )

}



