import './home.css'
import '../app.css'
import { Link } from 'react-router-dom'

export const Home = () => {

  const loggedInUserId = localStorage.getItem("loggedin")
  const users = JSON.parse(localStorage.getItem("users")) || []
  const loggedInUser = users.find((user) => user.id === loggedInUserId)

  return (
    <section className="pt-20 pb-40 w-full h-screen flex flex-col items-start text-left">
      <h1>Información de la cuenta</h1>
      <div className='basic-info w-full'>
        <h3>Información básica</h3>
        <div>
          <h4>Identificación</h4>
          <p>{loggedInUser.id}</p>
        </div>
        <div>
          <h4>Nombre</h4>
          <div className='flex justify-between items-center relative'>
            <p>
              {loggedInUser.name} {loggedInUser.lastname}
            </p>
            <Link to={"/editname"} className='inline-block bg-white text-gray-500 w-7 h-7 rounded-full text-center leading-7 no-underline cursor-pointer absolute left-60'><img src="/src/assets/mayor.png" alt="" /></Link>
          </div>
        </div>
        <div>
          <h4>Correo</h4>
          <div className='flex justify-between items-center relative'>
            <p>
              {loggedInUser.email}
            </p>
            <Link to={"/editemail"} className='inline-block bg-white text-gray-500 w-7 h-7 rounded-full text-center leading-7 no-underline cursor-pointer absolute left-60'><img src="/src/assets/mayor.png" alt="" /></Link>
          </div>
        </div>
      </div>
    </section>
  )
}
