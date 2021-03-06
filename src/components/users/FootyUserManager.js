export const getSingleFootyUser = (footyUserId) => {
    return fetch(`http://localhost:8000/footy_users/id`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
    .then(response => response.json())
}

export const getAllFootyUsers = () => {
    return fetch("http://localhost:8000/footy_users", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(response => response.json())
}