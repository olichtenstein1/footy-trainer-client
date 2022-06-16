import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { useParams } from "react-router-dom"
import { createComment } from "./PostManager"

export const CommentForm = () => {
    const history = useHistory()
    const { postId } = useParams()
    const [currentComment, setComment] = useState({
        content: "",
        rating: 0,
        post: postId
    })

    const changeCommentState = (c) => {
        // TODO: Complete the onChange function
        const newComment = { ...currentComment }
        newComment[c.target.name] = c.target.value
        setComment(newComment)
    }

    return (
        <>
            <form className="postComment">
                <h2 className="postComment__title">
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="content">Comment: </label>
                            <input type="text" name="content" required autoFocus className="form-control"
                                value={currentComment.content}
                                onChange={changeCommentState}
                            />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="rating">Rating: </label>
                            <input type="number" name="rating" min="1" max="10" required autoFocus className="form-control"
                                value={currentComment.rating}
                                onChange={changeCommentState}
                            />
                        </div>
                    </fieldset>
                    <button type="submit"
                        onClick={evt => {
                            // Prevent form from being submitted
                            evt.preventDefault()

                            const comment = {
                                content: currentComment.content,
                                rating: currentComment.rating,
                                post: currentComment.post
                            }

                            // Send POST request to your API
                            createComment(comment)
                                .then(() => history.push(`/posts/${postId}`))
                        }}
                        className="comment-button">Add Comment</button>
                </h2>
            </form>
        </>
    )

}