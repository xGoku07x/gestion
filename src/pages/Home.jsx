import './home.css'
import { Link } from 'react-router-dom'

export const Home = () => {

  const userName = JSON.parse(localStorage.getItem("user"))

  const validationContactInfo = () => {
    if (!userName.contactInfo) {
      return <p>No hay datos ingresados</p>
    }
    return <p>{userName.contactInfo}</p>
  }

  const validationFrequentPlaces = () => {
    if (!userName.frecuentPlace) {
      return <p>No hay datos ingresados</p>
    }
    return <p>{userName.frecuentPlace}</p>
  }

  const validationPaymentMethods = () => {
    if (!userName.paymentMethod) {
      return <p>No hay datos ingresados</p>
    }
    return <p>{userName.paymentMethod}</p>
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
          <p>{userName.id}</p>
        </div>
        <div>
          <h4>Nombre</h4>
          <p>{userName.name} {userName.lastname}</p>
        </div>
        <div>
          <h4>Correo</h4>
          <p>{userName.email}</p>
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
