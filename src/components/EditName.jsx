import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./editName.css";
import Swal from "sweetalert2";

export default function Editnombre() {
  const navigate = useNavigate();
  const loggedInUserId = localStorage.getItem("loggedin");
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const loggedInUser = users.find((user) => user.id === loggedInUserId);

  const [userData, setUserData] = useState(
    loggedInUser || {
      name: "",
      lastname: "",
    }
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSave = () => {
    if (!userData.name || !userData.lastname) {
      Swal.fire({
        title: "Error!",
        text: "Los campos no pueden estar vacíos",
        icon: "error",
        confirmButtonText: "Ok",
        timer: "5000",
        position: "top",
        background: "black",
        color: "white",
      });
      return;
    }

    const updatedUsers = users.map((user) => {
      if (user.id === loggedInUserId) {
        return userData;
      }
      return user;
    });
    Swal.fire({
      title: "Exito!",
      text: "El nombre se ha actualizado exitosamente",
      icon: "success",
      confirmButtonText: "Ok",
      timer: "5000",
      position: "top",
      background: "black",
      color: "white",
    });
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    navigate("/");
  };

  return (
    <section className="container-edit-name">
      <div className="container-info">
        <div>
          <h1>Nombre</h1>
          <p>Con este nombre te veran las personas</p>
        </div>
        <div>
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
        </div>
      </div>
      <button onClick={handleSave} className="btn-save-name">
        Actualizar
      </button>
    </section>
  );
}
