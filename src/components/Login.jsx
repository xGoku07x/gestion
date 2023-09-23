import "./login.css";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

export const Login = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();

    const registeredUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = registeredUsers.find(
      (user) => user.email === input.email && user.password === input.password
    );

    if (user) {
      Swal.fire({
        title: "Exito!",
        html: `¡Bienvenid@ <strong>${user.name}</strong>. Inició sesión correctamente`,
        icon: "success",
        confirmButtonText: "Ok",
        timer: "7000",
        position: "top",
        background: "black",
        color: "white",
      });
      localStorage.setItem("loggedin", user.id);
      navigate("/");
    } else {
      Swal.fire({
        title: "Error!",
        text: "Correo o contraseña incorrecta",
        icon: "error",
        confirmButtonText: "Ok",
        timer: "5000",
        position: "top",
        background: "black",
        color: "white",
      });
    }
  };

  return (
    <section className="section-login">
      <h1>Iniciar sesión</h1>
      <form className="form-login" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Correo electrónico"
          name="email"
          value={input.email}
          onChange={(e) =>
            setInput({
              ...input,
              [e.target.name]: e.target.value,
            })
          }
        />
        <input
          type="password"
          placeholder="Contraseña"
          name="password"
          value={input.password}
          onChange={(e) =>
            setInput({
              ...input,
              [e.target.name]: e.target.value,
            })
          }
        />
        <button>Ingresar</button>
      </form>
      <div className="redirect-register">
        <p>¿No tienes cuenta?</p>
        <Link to="/register">Registrarse!</Link>
      </div>
    </section>
  );
};
