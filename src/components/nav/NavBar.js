import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
  const history = useHistory()
  return (
    <nav>
      <div className="navBar">
        <div className="navBar-item">
      <Link to="/">Home</Link>
      </div>
      <div className="navBar-item">
      <Link to="/footy_users/myprofile">My Profile</Link>
      </div>
      {
        localStorage.getItem("auth_token") !== null ?
          <button onClick={() => {
            localStorage.removeItem("auth_token")
            history.push({ pathname: "/" })
          }}>
            Logout
          </button>
          :
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
      }
      </div>
    </nav>
  )
}
