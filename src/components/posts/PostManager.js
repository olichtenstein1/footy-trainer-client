export const getCategories = () => {
    return fetch("http://localhost:8000/categories", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const getTopics = () => {
    return fetch("http://localhost:8000/topics", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}


export const getSingleCategory = (categoryId) => {
    return fetch(`http://localhost:8000/categories/${categoryId}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const getPostsByCategory = (categoryId) => {
    return fetch(`http://localhost:8000/posts/post_by_category?category=${categoryId}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const createPost = (post) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        },
        body: JSON.stringify(post)
    }

    return fetch("http://localhost:8000/posts", requestOptions)
        .then(response => response.json())
}

export const updatePost = (post, postId) => {
    const requestOptions = {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        },
        body: JSON.stringify(post)
    }
    return fetch(`http://localhost:8000/posts/${postId}`, requestOptions)
    
}

export const getSinglePost = (postId) => {
    return fetch(`http://localhost:8000/posts/${postId}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    }
    )
        .then(response => response.json())
}

export const createComment = (comment) => {
    const requestOptions = {
        method: 'POST' ,
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        },
        body: JSON.stringify(comment) 
    }
// fix this fetch return
    return fetch (`http://localhost:8000/comments`, requestOptions)
    .then(response => response.json())
}