import React, { useRef } from "react"
import { Link, useHistory } from "react-router-dom"
import { registerUser } from "./AuthManager"
import './Auth.css'
// TODO: This should get you started on registering a new user. 
// Add new fields depending on your server side registration
export const Register = () => {
  const username = useRef()
  const password = useRef()
  const first_name = useRef()
  const last_name = useRef()
  const years_of_experience = useRef()
  const favorite_player = useRef()
  const favorite_player_image = useRef()
  const profile_picture = useRef()
  const bio = useRef()

  const history = useHistory()

  const handleRegister = (e) => {
    e.preventDefault()

    const newUser = {
      "username": username.current.value,
      "password": password.current.value,
      "first_name": first_name.current.value,
      "last_name": last_name.current.value,
      "years_of_experience": years_of_experience.current.value,
      "favorite_player": favorite_player.current.value,
      "favorite_player_image": favorite_player_image.current.value,
      "profile_picture": profile_picture.current.value,
      "bio": bio.current.value
    }

    registerUser(newUser).then(res => {
      if ("token" in res) {
        localStorage.setItem("auth_token", res.token)
        history.push("/")
      }
    })
  }

return (
  <main>
    <form onSubmit={handleRegister}>
      <h3>Register an account</h3>
      <fieldset>
        <label htmlFor="inputUsername">Username</label>
        <input ref={username} type="text" name="username" placeholder="Username" required />
      </fieldset>
      <fieldset>
        <label htmlFor="inputPassword"> Password </label>
        <input ref={password} type="password" name="password" placeholder="Password" required />
      </fieldset>
      <fieldset>
        <label htmlFor="inputFirstName"> First Name </label>
        <input ref={first_name} type="text" name="first_name" placeholder="First Name" required />
      </fieldset>
      <fieldset>
        <label htmlFor="inputLastName"> Last Name </label>
        <input ref={last_name} type="text" name="last_name" placeholder="Last Name" required />
      </fieldset>
      <fieldset>
        <label htmlFor="inputYearsOfExperience"> Years of Experience </label>
        <input ref={years_of_experience} type="number" name="years_of_experience" placeholder="" required />
      </fieldset>
      <fieldset>
        <label htmlFor="inputFavoritePlayer"> Favorite Player: </label>
        <input ref={favorite_player} type="text" name="favorite_player" placeholder="Favorite Player" required />
      </fieldset>
      <fieldset>
        <label htmlFor="inputFavoritePlayerImage">  Favorite Player Image (url)</label>
        <input ref={favorite_player_image} type="url" name="favorite_player_image" placeholder="" required />
      </fieldset>
      <fieldset>
        <label htmlFor="profilePicture">  Profile Picture (url)</label>
        <input ref={profile_picture} type="url" name="profile_picture" placeholder="" required />
      </fieldset>
      <fieldset>
        <label htmlFor="bio">  Bio:</label>
        <input ref={bio} type="text" name="bio" placeholder="" required />
      </fieldset>
      <fieldset>
        <button type="submit">Register</button>
      </fieldset>
    </form>
    <section>
      Already registered? <Link to="/login">Login</Link>
    </section>
  </main>
)
}
