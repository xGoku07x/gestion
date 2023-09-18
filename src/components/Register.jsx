import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import './register.css'

export const Register = () => {

    const navigate = useNavigate()

    const [input, setInput] = useState({
        name : "",
        lastname : "",
        id : "",
        email : "",
        password : "",
        information : false
    })

    //to store value in localstorage
    const handleSubmit = (e) => {
        e.preventDefault()

        // Verifica que todos los campos, excepto el checkbox, estén llenos
        if (
            input.name.trim() === "" ||
            input.lastname.trim() === "" ||
            input.id.trim() === "" ||
            input.email.trim() === "" ||
            input.password.trim() === ""
        ) {
            alert("Por favor, completa todos los campos obligatorios.");
        } else {
            // Todos los campos están llenos, puedes proceder a almacenar en el localStorage y navegar
            localStorage.setItem("user", JSON.stringify(input))
            navigate('/login')
        }
    }

  return (
    <section className="section-register">
        <h1>Crea tu perfil</h1>
        <form className="form-register" onSubmit={handleSubmit}>
            <div className="name-input">
                <input type="text" placeholder="Nombre*" name="name" value={input.name} onChange={(e) => setInput({...input,[e.target.name] : e.target.value,})} />
                <input type="text" placeholder="Apellido*" name="lastname" value={input.lastname} onChange={(e) => setInput({...input,[e.target.name] : e.target.value,})} />
            </div>
            <input type="number" placeholder="Identificación*" name="id" value={input.id} onChange={(e) => setInput({...input, [e.target.name] : e.target.value,})} />
            <input type="email" placeholder="Correo electrónico*" name="email" value={input.email} onChange={(e) => setInput({...input, [e.target.name] : e.target.value,})} />
            <input type="password" placeholder="Contraseña*" name="password" value={input.password} onChange={(e) => setInput({...input,[e.target.name] : e.target.value,})} />
            <div className="information-register">
                <input type="checkbox" id="information" name="information" checked={input.information} onChange={(e) => setInput({...input,[e.target.name] : e.target.checked,})} />
                <label htmlFor="information">Me gustaria recibir información, promociones y novedades <br /> relacionadas con la plataforma</label>
            </div>
            <button>CREAR CUENTA</button>
        </form>
        <div className="redirect-login">
            <p>¿Ya tienes una cuenta?</p>
            <Link to="/login">Ingresar</Link>
        </div>
    </section>
  )
}
