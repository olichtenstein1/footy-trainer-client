import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { createPost, getCategories, getTopics } from "./PostManager"
import "./PostForm.css"

export const PostForm = () => {
    const history = useHistory()
    const [categories, setCategories] = useState([])
    const [topics, setTopics] = useState([])
    const { categoryId } = useParams()

    // fix currentpost.category to represent the category for corresponding postbycategory page
    const [currentPost, setCurrentPost] = useState({
        difficulty_level: 1,
        description: "",
        title: "",
        video_tutorial: "",
        category: categoryId,
        topics: []
    })
    

    useEffect(() => {
        getCategories()
        .then(data => {
            setCategories(data)
        })

    }, [])

    useEffect(() => {
        getTopics()
        .then(data => {
            setTopics(data)
        })

    }, [])

    const changePostState = (p) => {
        const newPost = { ...currentPost }
        if (p.target.name === "topics"){
            if (newPost.topics.includes(parseInt(p.target.id)))
            {
                const index = newPost.topics.indexOf(parseInt(p.target.id))
                newPost.topics.splice(index, 1)
            } else {newPost.topics.push(parseInt(p.target.id))}
        } else {
        newPost[p.target.name] = p.target.value
    }
    setCurrentPost(newPost)
    }

    return (
        <form className="postForm">
            <h2 className="postForm_title">Create New Post </h2>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="title"> Title: </label>
                    <input type="text" name="title" required autoFocus className="form-control"
                        value={currentPost.title}
                        onChange={changePostState}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <input type="text" name="description" required autoFocus className="form-control"
                        value={currentPost.description}
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
                                <input type="checkbox" id= {topic.id} name="topics"  autoFocus className="form-control"
                                
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
                        value={currentPost.difficulty_level}
                        onChange={changePostState}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="video_tutorial">Video Tutorial: </label>
                    <input type="url" name="video_tutorial" required autoFocus className="form-control"
                        value={currentPost.video_tutorial}
                        onChange={changePostState}
                    />
                </div>
            </fieldset>

            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()

                    const post = {
                        difficulty_level: currentPost.difficulty_level,
                        description: currentPost.description,
                        title: currentPost.title,
                        video_tutorial: currentPost.video_tutorial,
                        topics: currentPost.topics,
                        category: currentPost.category
                    }
                    createPost(post)
                        .then(() => history.push(`/posts/post_by_category/${currentPost.category}`))

                }}
                className="buttonCreate">Create</button>
        </form>
    )

}