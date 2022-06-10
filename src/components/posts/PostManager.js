export const getCategories = () => {
    return fetch("http://localhost:8000/categories", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const getTopics = () => {
    return fetch("http://localhost:8000/topics", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}


export const getSingleCategory = (categoryId) => {
    return fetch (`http://localhost:8000/categories/${categoryId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
    .then(response => response.json())
}

export const getPostsByCategory = (categoryId) => {
    return fetch(`http://localhost:8000/posts/post_by_category?category=${categoryId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const createPost = (post) => {
    const requestOptions = {
        method: 'POST' ,
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        },
        body: JSON.stringify(post) 
    }

    return fetch ("http://localhost:8000/posts", requestOptions)
    .then(response => response.json())
}