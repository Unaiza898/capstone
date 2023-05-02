import { useState } from 'react'
import supabase from "../config/client";
import { useNavigate } from 'react-router-dom'
import { Outlet, Link } from "react-router-dom";

export default function Auth() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
const navigate = useNavigate();

const PageRoute = () => {
    navigate("/")
}
  const handleSignUp = async (event) => {
    event.preventDefault()

    setLoading(true)


  await supabase.auth.signInWithPassword({
     email: email,
    password: password
  }).then(response => {
    // Handle successful sign in
       alert('Sign in congrats!!')
      navigate("/gallery")
    console.log(response)
  }).catch(error => {
    // Handle sign in error
    console(error)
  })
  }

  return (
    <div className="App">
    <div className="row flex flex-center">
      <div className="col-6 form-widget">
        <h1 className="header">Sign In </h1>
     
        <form className="form-widget" onSubmit={handleSignUp}>
          <div>
            <input
              className="inputField"
              type="email"
              placeholder="Your email"
              value={email}
              required={true}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              className="inputField"
              type="password"
              placeholder="Your password"
              value={password}
              required={true}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button className={'button block'} disabled={loading}>
              {loading ? <span>Loading</span> : <span>Log in </span>}
            </button>
            <Link to={PageRoute}> Havent registered yet </Link>
            {/* <button className={'button block'} onClick={PageRoute}>
             Login
            </button> */}
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}