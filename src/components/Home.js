import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom" 
import { getCategories, getPostsByCategory, getSingleCategory } from "./posts/PostManager"
import "./Home.css"


export const Home = () => {
    const { categoryId } = useParams()
    const [categories, setCategories] = useState([])
    const history = useHistory()

    const [currentCategory, setCurrentCategory] = useState({
        label: ""
    })
    
    


    // gets all the categories and sets the state
    useEffect(() => { getCategories()
        .then((categories => {
            setCategories(categories)})) 
        

    }, [])

    

    const changeCategoryState = (c) => {
        // TODO: Complete the onChange function
        const newCategory = {...currentCategory}
        newCategory[c.target.name] = c.target.value
        setCurrentCategory(newCategory)
    }
    

    return (
    <article className="home">
        <div className="title">
        
        </div>
        <div className="cat-dropdown">
                        <label htmlFor="post_category"></label>
                        
                        <select
                        name="category"
                        value={currentCategory.id}
                        onChange={changeCategoryState}
                        
                        required autoFocus
                        className="form-control"
                        >

                             <option value="0" key={'category'}>Choose a Category </option>
                            {
                                categories.map(
                                    (c) => {
                                        return <option value={c.id} keys={`category--${c.id}`}>
                                            {c.label}
                                        </option>
                                    }
                                    )
                                }
                            </select>
                                
                            <button className="button1"
                                onClick={() => {
                                   getPostsByCategory(currentCategory.category)
                                   history.push({ pathname: `/posts/post_by_category/${currentCategory.category}` })
                                }}
                            >GO!</button>
                    </div>
                </article>
    )

}