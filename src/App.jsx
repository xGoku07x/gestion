import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { ProtectedRoutes } from "./services/ProtectedRoutes";
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes >
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* protected routes */}
        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App