import './home.css'
import { Link } from 'react-router-dom'

export const Home = () => {

  const loggedInUserId = localStorage.getItem("loggedin")
  const users = JSON.parse(localStorage.getItem("users")) || []
  const loggedInUser = users.find((user) => user.id === loggedInUserId)

  return (
    <section className="container-home">
      <h1>Información de la cuenta</h1>
      <div className='basic-info'>
        <h3>Información básica</h3>
        <div>
          <h4>Identificación</h4>
          <p>{loggedInUser.id}</p>
        </div>
        <div>
          <h4>Nombre</h4>
          <div className='info-user'>
            <p>
              {loggedInUser.name} {loggedInUser.lastname}
            </p>
            <Link to={"/editname"} className='btn-edit'><img src="/src/assets/mayor.png" alt="" /></Link>
          </div>
        </div>
        <div>
          <h4>Correo</h4>
          <div className='info-user'>
            <p>
              {loggedInUser.email}
            </p>
            <Link to={"/editemail"} className='btn-edit'><img src="/src/assets/mayor.png" alt="" /></Link>
          </div>
        </div>
      </div>
    </section>
  )
}
