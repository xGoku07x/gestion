import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./editName.css";
import Swal from "sweetalert2";

export default function EditName() {
  
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
    const alphabeticRegex = /^[A-Za-z\s]*$/;
    if (!value.match(alphabeticRegex)) {
      return;
    }
    setUserData({ ...userData, [name]: value });
  };

  const [error, setError] = useState("");
  const [error2, setError2] = useState("");

  const handleSave = () => {
    if (!userData.name && !userData.lastname) {
      setError("El campo no puede estar vacio");
      setError2("El campo no puede estar vacio");
      setTimeout(() => {
        setError("");
      }, 5000);
      setTimeout(() => {
        setError2("");
      }, 5000);
      return;
    } else if (!userData.name) {
      setError("El campo no puede estar vacio");
      setTimeout(() => {
        setError("");
      }, 5000);
      return;
    } else if (!userData.lastname) {
      setError2("El campo no puede estar vacio");
      setTimeout(() => {
        setError2("");
      }, 5000);
      return;
    }

    const updatedUsers = users.map((user) => {
      if (user.id === loggedInUserId) {
        return userData;
      }
      return user;
    });
    Swal.fire({
      text: "Los cambios se han realizado con éxito",
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
            {error && <div className="error">{error}</div>}
          </div>
          <div>
            <h4>Apellidos</h4>
            <input
              type="text"
              name="lastname"
              value={userData.lastname}
              onChange={handleInputChange}
            />
            {error2 && <div className="error">{error2}</div>}
          </div>
        </div>
      </div>
      <button onClick={handleSave} className="btn-save-name">
        Actualizar
      </button>
    </section>
  );
}
