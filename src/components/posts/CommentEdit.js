import React, { useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
// get single comment and update comment fetch calls
import { getSingleComment, updateComment, updatePost } from "./PostManager"
// import "./CommentEdit.css"

export const CommentEdit = () => {
    const [comment, assignComment] = useState({})
    const { commentId } = useParams()
    const history = useHistory()
    const { postId } = useParams()
    


useEffect(
    () => {
        getSingleComment(commentId)
        .then(data => {
            assignComment(data)
        })
    }, {}
)

const changeCommentState = (c) => {
    // TODO: Complete the onChange function
    const newComment = { ...comment }
    newComment[c.target.name] = c.target.value
    assignComment(newComment)
}

return (
    <>
        <form className="postCommentEdit">
            <h2 className="postCommentEdit__title">
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="content">Comment: </label>
                        <input type="text" name="content" required autoFocus className="form-control"
                            value={comment.content}
                            onChange={changeCommentState}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="rating">Rating: </label>
                        <input type="number" name="rating" min="1" max="10" required autoFocus className="form-control"
                            value={comment.rating}
                            onChange={changeCommentState}
                        />
                    </div>
                </fieldset>
                <button type="submit"
                    onClick={evt => {
                        // Prevent form from being submitted
                        evt.preventDefault()

                        const commentNew = {
                            content: comment.content,
                            rating: comment.rating,
                            post: comment.post?.id
                        }

                        // Send POST request to your API
                        updateComment(commentNew, commentId)
                            .then(() => history.push(`/posts/${postId}`))
                    }}
                    className="comment-button">Update Comment</button>
            </h2>
        </form>
    </>
)

}