import './home.css'

export const Home = () => {

  const userName = JSON.parse(localStorage.getItem("user"))

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
          <button className='btn-edit'>Editar</button>
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
          <p>N/A</p>
        </div>
        <div>
          <h4>Lugares frecuentes</h4>
          <p>N/A</p>
        </div>
        <div>
          <h4>Métodos de pago</h4>
          <p>N/A</p>
        </div>
      </div>
    </section>
  )
}
