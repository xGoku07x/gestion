import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import './edit.css'

export default function Edit() {

  // Obtén el identificador del usuario que inició sesión desde el local storage
  const loggedInUserId = localStorage.getItem("loggedin");

  // Obtén los datos de todos los usuarios registrados
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Encuentra al usuario que coincide con el identificador de sesión
  const loggedInUser = users.find((user) => user.id === loggedInUserId);

  // Establece el estado inicial con los datos del usuario que inició sesión
  const [userData, setUserData] = useState(loggedInUser || {
    id: "",
    name: "",
    lastname: "",
    email: "",
    password: "",
    contactInfo: "",
    frecuentPlace: "",
    paymentMethod: ""
  });

  // Maneja los cambios en los campos de entrada y actualiza el estado correspondiente
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // Maneja el clic en el botón "Guardar" para guardar los datos en el localStorage
  const handleSave = () => {
    // Actualiza los datos del usuario en el array de usuarios
    const updatedUsers = users.map((user) => {
      if (user.id === loggedInUserId) {
        return userData;
      }
      return user;
    });

    // Guarda los datos actualizados en el local storage
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

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
      </div>
    </section>
  );
}