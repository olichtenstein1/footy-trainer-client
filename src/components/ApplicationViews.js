import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AllPostsByCategory } from "./posts/AllPostsByCategory"
import { CommentEdit } from "./posts/CommentEdit"
import { CommentForm } from "./posts/CommentForm"
import { PostDetails } from "./posts/PostDetails"
import { PostEdit } from "./posts/PostEdit"
import { PostForm } from "./posts/PostForm"
import { FootyUserDetails } from "./users/FootyUserDetails"


export const ApplicationViews = () => {
    return <>
        <main>
            <Route exact path="/">
                    <Home />
            </Route>

            <Route exact path="/posts/post_by_category/:categoryId(\d+)">
                <AllPostsByCategory />
            </Route>

            <Route exact path="/posts/new/:categoryId(\d+)">
                <PostForm />
            </Route>

            <Route exact path="/posts/:postId(\d+)">
                <PostDetails />
            </Route>

            <Route exact path="/posts/edit/:postId(\d+)">
                <PostEdit />
            </Route>

            <Route exact path="/posts/:postId(\d+)/comment">
                <CommentForm />
            </Route>

            <Route exact path="/posts/:postId(\d+)/commentEdit/:commentId(\d+)">
                <CommentEdit />
            </Route>

            <Route exact path="/footy_users/myprofile">
                <FootyUserDetails />
            </Route>
        </main>
    </>
}
