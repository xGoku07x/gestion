import './navbar.css'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {

    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("loggedin")
        navigate('/login')
    }

  return (
    <nav className="navbar">
        <div className="menu-icon">
            <div className="menu-line"></div>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
        </div>
        <div className="navbar-left">
            <span className="navbar-title">SSMU</span>
        </div>
        <div className="navbar-center">
            <input
            type="text"
            placeholder="Buscar en SSMU"
            className="search-bar"
            />
        </div>
        <div className="navbar-right">
            <img
                src='/src/assets/colombia.png'
                alt="Bandera de Colombia"
                className="flag-icon"
            />
            <div className='dropdown'>
                <img
                    src='/src/assets/perfilUsuario.png'
                    alt="foto de perfil"
                    className='profile-icon'
                />
                <div className="dropdown-content">
                    <Link to="/">Información de la cuenta</Link>
                    <button onClick={handleLogout}>Cerrar sesión</button>
                </div>
            </div>
            
        </div>
    </nav>
  )
}
