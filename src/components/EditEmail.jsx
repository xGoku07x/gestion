import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./editEmail.css";
import Swal from "sweetalert2";

export default function Editnombre() {
  const navigate = useNavigate();
  const loggedInUserId = localStorage.getItem("loggedin");
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const loggedInUser = users.find((user) => user.id === loggedInUserId);

  const [userData, setUserData] = useState(
    loggedInUser || {
      email: "",
    }
  );

  const [error, setError] = useState("")

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSave = () => {
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const isEmailExist = existingUsers.some(
      (user) => user.email === userData.email
    );

    if (isEmailExist && loggedInUser && loggedInUser.email !== userData.email) {
      setError("El correo ya esta asociado a otra cuenta")
      setTimeout(() => {
        setError("");
      }, 5000)
    } else if (!userData.email) {
      setError("El campo no puede estar vacio")
      setTimeout(() => {
        setError("");
      }, 5000)
    } else {
      const updatedUsers = users.map((user) => {
        if (user.id === loggedInUserId) {
          return { ...user, email: userData.email };
        }
        return user;
      });

      localStorage.setItem("users", JSON.stringify(updatedUsers));
      Swal.fire({
        text: "Los cambios se han realizado con éxito",
        icon: "success",
        confirmButtonText: "Ok",
        timer: "5000",
        position: "top",
        background: "black",
        color: "white",
      });
      navigate("/");
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
            value={userData.email}
            onChange={handleInputChange}
          />
          {error && <div className="error">{error}</div>}
        </div>
      </div>
      <button onClick={handleSave} className="btn-save-email">
        Actualizar
      </button>
    </section>
  );
}
