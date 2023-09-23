import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import './register.css'
import Swal from 'sweetalert2'

export const Register = () => {

    const navigate = useNavigate()

    const [input, setInput] = useState({
        name : "",
        lastname : "",
        id : "",
        email : "",
        password : "",
        information : false,
    })
    
    const isPasswordValid = (password) => {
        if (password.length < 6) {
            return false
        }
        if (!/[A-Z]/.test(password)) {
            return false
        }
        if (!/[a-z]/.test(password)) {
            return false
        }
        if (!/\d/.test(password)) {
            return false
        }
        if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
            return false
        }
        return true
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (
            input.name.trim() === "" ||
            input.lastname.trim() === "" ||
            input.id.trim() === "" ||
            input.email.trim() === "" ||
            input.password.trim() === ""
        ) {
            Swal.fire({
                title: 'Error!',
                text: 'Por favor, completa todos los campos obligatorios',
                icon: 'error',
                confirmButtonText: 'Ok',
                timer: '5000',
                position: 'top',
                background: 'black',
                color: 'white'
            })
        } else if (!isPasswordValid(input.password)) {
            Swal.fire({
                title: 'Contraseña',
                text: 'La contraseña debe tener al menos 6 caracteres, incluir mayúsculas, minúsculas y caracteres especiales',
                icon: 'info',
                confirmButtonText: 'Ok',
                timer: '6000',
                position: 'top',
                background: 'black',
                color: 'white'
            })
        } else {
            const existingUsers = JSON.parse(localStorage.getItem("users")) || []
            const isIdExist = existingUsers.some(user => user.id === input.id)
            const isEmailExist = existingUsers.some(user => user.email === input.email)
            if (isIdExist) {
                Swal.fire({
                    title: 'Error!',
                    text: 'El ID ya está registrado',
                    icon: 'error',
                    confirmButtonText: 'Ok',
                    timer: '5000',
                    position: 'top',
                    background: 'black',
                    color: 'white'
                })
            } else if (isEmailExist) {
                Swal.fire({
                    title: 'Error!',
                    text: 'El correo electrónico ya está registrado. Por favor, utiliza otro',
                    icon: 'error',
                    confirmButtonText: 'Ok',
                    timer: '6000',
                    position: 'top',
                    background: 'black',
                    color: 'white'
                })
            } else {
                Swal.fire({
                    title: 'Exito!',
                    text: 'Se ha registrado exitosamente',
                    icon: 'success',
                    confirmButtonText: 'Ok',
                    timer: '5000',
                    position: 'top',
                    background: 'black',
                    color: 'white'
                })
                existingUsers.push(input)
                localStorage.setItem("users", JSON.stringify(existingUsers))
                navigate('/login')
            }
        }
    }

  return (
    <section className="section-register">
        <h1>Crea tu perfil</h1>
        <form className="form-register" onSubmit={handleSubmit}>
            <div className="name-input">
                <input type="text" placeholder="Nombre*" name="name" value={input.name} onChange={(e) => setInput({...input,[e.target.name] : e.target.value,})} />
                <input type="text" placeholder="Apellidos*" name="lastname" value={input.lastname} onChange={(e) => setInput({...input,[e.target.name] : e.target.value,})} />
            </div>
            <input type="number" placeholder="Identificación*" name="id" value={input.id} onChange={(e) => setInput({...input, [e.target.name] : e.target.value,})} />
            <input type="email" placeholder="Correo electrónico*" name="email" value={input.email} onChange={(e) => setInput({...input, [e.target.name] : e.target.value,})} />
            <input type="password" placeholder="Contraseña*" name="password" value={input.password} onChange={(e) => setInput({...input,[e.target.name] : e.target.value,})} />
            <div className="information-register">
                <input type="checkbox" id="information" name="information" checked={input.information} onChange={(e) => setInput({...input,[e.target.name] : e.target.checked,})} />
                <label htmlFor="information">Me gustaria recibir información, promociones y novedades <br /> relacionadas con la plataforma</label>
            </div>
            <button>Registrarme</button>
        </form>
        <div className="redirect-login">
            <p>¿Ya tienes una cuenta?</p>
            <Link to="/login">Ingresar!</Link>
        </div>
    </section>
  )
}