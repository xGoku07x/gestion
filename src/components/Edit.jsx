import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import './edit.css'

export default function Edit() {

  const loggedInUserId = localStorage.getItem("loggedin")
  const users = JSON.parse(localStorage.getItem("users")) || []
  const loggedInUser = users.find((user) => user.id === loggedInUserId)

  const [userData, setUserData] = useState(loggedInUser || {
    id: "",
    name: "",
    lastname: "",
    email: "",
    password: "",
    contactInfo: "",
    frecuentPlace: "",
    paymentMethod: ""
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
  }

  const handleSave = () => {
    const updatedUsers = users.map((user) => {
      if (user.id === loggedInUserId) {
        return userData
      }
      return user
    })

    localStorage.setItem("users", JSON.stringify(updatedUsers))
  }

  return (
    <section className='container-edit'>
      <h1>Información de la cuenta</h1>
      <img 
        src="/src/assets/perfilUsuario.png"
        alt="foto usuario"
        className='user-image-edit'
      />
      <div className='basic-info-edit'>
        <div className='info-save'>
          <h3>Información básica</h3>
          <Link to={"/"} onClick={handleSave} className='btn-save'>Guardar</Link>
        </div>
        <div>
          <h4>Identificación</h4>
          <p>{userData.id}</p>
        </div>
        <div>
          <h4>Nombres</h4>
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <h4>Apellidos</h4>
          <input
            type="text"
            name="lastname"
            value={userData.lastname}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <h4>Correo</h4>
          <p>{userData.email}</p>
        </div>
        <div>
          <h4>Contraseña</h4>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className='additional-info-edit'>
        <h3>Información adicional</h3>
        <div>
          <h4>Datos de contacto</h4>
          <input
            type="number"
            name="contactInfo"
            value={userData.contactInfo}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <h4>Lugares frecuentes</h4>
          <input
            type="text"
            name="frecuentPlace"
            value={userData.frecuentPlace}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <h4>Métodos de pago</h4>
          <input
            type="text"
            name="paymentMethod"
            value={userData.paymentMethod}
            onChange={handleInputChange}
          />
        </div>
        <div className='additional-info-more'>
          <div className='info-more'>
            <h3>Integrantes</h3>
            <button className='btn-more btn-more-integers' >
              <img src="/src/assets/mas(1).png" alt="mas" className='more-icon' />
            </button>
          </div>
          <div className='new-integer'>
            <div>
              <h4>Nombre del usuario</h4>
              <input type="text" placeholder='xxxxxxxx xxxxxxx' />
            </div>
            <div>
              <h4>Telefono del usuario</h4>
              <input type="number" placeholder='xxxxxxxx' />
            </div>
          </div>
        </div>
        <div className='additional-info-more'>
          <div className='info-more'>
            <h3>Lugares favoritos</h3>
            <button className='btn-more' >
              <img src="/src/assets/mas(1).png" alt="mas" className='more-icon' />
            </button>
          </div>
          <div className='new-integer'>
            <div>
              <h4>Nombre</h4>
              <input type="text" placeholder='xxxxxxxx xxxxxxx' />
            </div>
            <div>
              <h4>Ubicación</h4>
              <input type="number" placeholder='xxxxxxxx' />
            </div>
          </div>
        </div>
        <div className='additional-info-more'>
          <div className='info-more'>
            <h3>Metodos de pago</h3>
            <button className='btn-more' >
              <img src="/src/assets/mas(1).png" alt="mas" className='more-icon' />
            </button>
          </div>
          <div className='new-integer'>
            <div>
              <h4>Numero de la tarjeta</h4>
              <input type="number" placeholder='xxxx xxxx xxxx 1234' />
            </div>
            <div>
              <h4>Fecha de vencimiento</h4>
              <input type="date" placeholder='xx/xx/xxxx' />
            </div>
          </div>
          <h4>CVV</h4>
          <input type="number" placeholder='xxx' />
        </div>
      </div>
    </section>
  )
}