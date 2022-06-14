import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getSingleFootyUser } from "./FootyUserManager"



export const FootyUserDetails = () => {
    const { footyUserId } = useParams()
    const [footyUser, setFootyUser] = useState({})

    useEffect(() => {
        getSingleFootyUser(footyUserId)
            .then((data) => {
                setFootyUser(data)
            })
    }, []
    )




    return (
        <>
            <h1>Hello World</h1>
            <section className="footyUserDetails">
            <div>Picture: <img src={`${footyUser.profile_picture}`} width={300} height={300} /></div>
            <div>Name: {footyUser.user?.first_name} {footyUser.user?.last_name}</div>
            <div>Username: {footyUser.user?.username}</div>
            <div>Email: {footyUser.user?.email}</div>
            </section>
        </>
    )
}