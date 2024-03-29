import React, { useRef } from "react"
import { Link, useHistory } from "react-router-dom"
import "./Auth.css"
import { loginUser } from "./AuthManager"


export const Login = () => {
  const username = useRef()
  const password = useRef()
  const invalidDialog = useRef()
  const history = useHistory()

  const handleLogin = (e) => {
    e.preventDefault()
    const user = {
      username: username.current.value,
      password: password.current.value
    }

    loginUser(user)
      .then(res => {
        if ("valid" in res && res.valid && "token" in res) {
          localStorage.setItem("auth_token", res.token)
          history.push("/")
        }
        else {
          invalidDialog.current.showModal()
        }
      })
  }

  return (
    <main className="container--login" >
      <dialog className="dialog dialog--auth" ref={invalidDialog}>
        <div>Username or password was not valid.</div>
        <button className="button--close" onClick={e => invalidDialog.current.close()}>Close</button>
      </dialog>
      <section className="form--body">
        <form className="form--login" onSubmit={handleLogin}>
          <fieldset>
            <label htmlFor="inputUsername"> Username</label>
            <input ref={username} type="username" className="form-control" id="username" placeholder="Username address" required autoFocus />
          </fieldset>
          <fieldset>
            <label htmlFor="inputPassword"> Password </label>
            <input ref={password} type="password" className="form-control" id="password" placeholder="Password" required />
          </fieldset>
          <fieldset>
            <button type="submit">Sign In</button>
          </fieldset>
        </form>
      </section>
      <section>
        <Link to="/register">Not a member yet?</Link>
      </section>
    </main>
  )
}
