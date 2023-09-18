import './login.css'
import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'

export const Login = () => {

  const navigate = useNavigate()

  const [input, setInput] = useState({
    email : "",
    password : ""
  })

  const handleLogin = (e) => {
    e.preventDefault()
    const loggeduser = JSON.parse(localStorage.getItem("user"))
    if(input.email == loggeduser.email && input.password == loggeduser.password) {
      localStorage.setItem("loggedin",true)
      navigate("/")
    } else {
      alert('Wrong Email or Password')
    }
  }

  return (
    <section className='section-login'>
            <h1>Login</h1>
            <form className='form-login' onSubmit={handleLogin}>
              <input 
                type="email" 
                placeholder="Email"
                name="email" 
                value={input.email} 
                onChange={(e) => 
                    setInput({
                        ...input,
                        [e.target.name] : e.target.value,
                    })
                } 
              />
              <input 
                type="password" 
                placeholder="password"
                name="password" 
                value={input.password} 
                onChange={(e) => 
                    setInput({
                        ...input,
                        [e.target.name] : e.target.value,
                    })
                } 
              />
              <button>Login</button>
            </form>
            <p>Don't have an account?</p>
            <Link to="/register">Register here!</Link>
        </section>
  )
}
