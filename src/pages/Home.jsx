import './home.css'
import { Link } from 'react-router-dom'

export const Home = () => {

  const loggedInUserId = localStorage.getItem("loggedin");
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const loggedInUser = users.find((user) => user.id === loggedInUserId);

  const userName = JSON.parse(localStorage.getItem("user"))

  const validationContactInfo = () => {
    if (!loggedInUser.contactInfo) {
      return <p>No hay datos ingresados</p>
    }
    return <p>{loggedInUser.contactInfo}</p>
  }

  const validationFrequentPlaces = () => {
    if (!loggedInUser.frecuentPlace) {
      return <p>No hay datos ingresados</p>
    }
    return <p>{loggedInUser.frecuentPlace}</p>
  }

  const validationPaymentMethods = () => {
    if (!loggedInUser.paymentMethod) {
      return <p>No hay datos ingresados</p>
    }
    return <p>{loggedInUser.paymentMethod}</p>
  }

  return (
    <section className="container-home">
      <h1>Información de la cuenta</h1>
      <img
        src={userName?.picture || '/src/assets/perfilUsuario.png'}
        alt="foto usuario"
        className='user-image'
      />
      <div className='basic-info'>
        <div className='info-edit'>
          <h3>Información básica</h3>
          <Link to={"/edit"} className='btn-edit'>Editar</Link>
        </div>
        <div>
          <h4>Identificación</h4>
          <p>{loggedInUser.id}</p>
        </div>
        <div>
          <h4>Nombre</h4>
          <p>{loggedInUser.name} {loggedInUser.lastname}</p>
        </div>
        <div>
          <h4>Correo</h4>
          <p>{loggedInUser.email}</p>
        </div>
      </div>
      <div className='additional-info'>
        <h3>Información adicional</h3>
        <div>
          <h4>Datos de contacto</h4>
          {validationContactInfo()}
        </div>
        <div>
          <h4>Lugares frecuentes</h4>
          {validationFrequentPlaces()}
        </div>
        <div>
          <h4>Métodos de pago</h4>
          {validationPaymentMethods()}
        </div>
      </div>
    </section>
  )
}
