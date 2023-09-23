import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./editEmail.css";

export default function Editnombre() {
  const loggedInUserId = localStorage.getItem("loggedin");
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const loggedInUser = users.find((user) => user.id === loggedInUserId);

  const [userData, setUserData] = useState(
    loggedInUser || {
      email: "",
    }
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSave = () => {
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const isEmailExist = existingUsers.some((user) => user.email === userData.email);
  
    if (isEmailExist && loggedInUser && loggedInUser.email !== userData.email) {
      alert("El correo ya esta asociado a otra cuenta");
    } else {
      const updatedUsers = users.map((user) => {
        if (user.id === loggedInUserId) {
          return { ...user, email: userData.email };
        }
        return user;
      });
  
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      alert("Los cambios se han realizado con éxito");
    }
  };

  return (
    <section className="container-edit-email">
      <div className="container-info">
        <div>
          <h1>Correo electrónico</h1>
          <p>Personaliza tu experiencia</p>
        </div>
        <div>
          <input
            type="email"
            name="email"
            onChange={handleInputChange}
          />
        </div>
      </div>
      <Link to={"/"} onClick={handleSave} className="btn-save-email">
        Actualizar
      </Link>
    </section>
  );
}
