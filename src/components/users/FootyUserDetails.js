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
            <h1>{footyUser.user?.username}</h1>
            <section className="footyUserDetails">
            <div><img src={`${footyUser.profile_picture}`} width={200} height={300} /></div>
            <div>Name: {footyUser.user?.first_name} {footyUser.user?.last_name}</div>
            <div>Email: {footyUser.user?.email}</div>
            </section>
        </>
    )
}