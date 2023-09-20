import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { ProtectedRoutes } from "./services/ProtectedRoutes";
import './App.css'
import Navbar from "./components/Navbar";
import Edit from "./components/Edit";
import Aside from "./components/Aside";

function App() {

  return (
    <BrowserRouter>
      <Routes >
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* protected routes */}
        <Route path="/" element={<> <Navbar /> <Aside /> <ProtectedRoutes /> </>}>
          <Route path="/" element={<Home />} />
          <Route path="/edit" element={<Edit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App