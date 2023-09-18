import './home.css'
import { useNavigate } from 'react-router-dom'

export const Home = () => {

  const navigate = useNavigate()
  const userName = JSON.parse(localStorage.getItem("user"))

  const handleLogout = () => {
    localStorage.removeItem("loggedin")
    navigate('/login')
  }

  return (
    <section className="container-home">
      <h1>Home</h1>
      <h4>Welcome- {userName.name}</h4>
      <button type='submit' onClick={handleLogout}>Logout</button>
    </section>
  )
}
