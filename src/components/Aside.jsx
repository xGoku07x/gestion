import '../app.css'

export default function Asaid() {
  return (
    <aside className='w-15 fixed top-14 left-0 h-full bg-gray-300 p-4 lg:w-full md:w-full sm:w-full w-full lg:relative md:relative sm:relative lg:auto md:auto sm:auto'>
      <h2>Menú</h2>
      <ul className='list-none p-0'>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Acerca de nosotros</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </aside>
  )
}