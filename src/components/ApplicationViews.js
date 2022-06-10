import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AllPostsByCategory } from "./posts/AllPostsByCategory"
import { PostForm } from "./posts/PostForm"

export const ApplicationViews = () => {
    return <>
        <main>
            <Route exact path="/">
                    <Home />
            </Route>

            <Route exact path="/posts/post_by_category/:categoryId(\d+)">
                <AllPostsByCategory />
            </Route>

            <Route exact path="/posts/new">
                <PostForm />
            </Route>
        </main>
    </>
}
