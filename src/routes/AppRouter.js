import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './../views/Home'
import Login from './../views/Login'
import Register from './../views/Register'
import PageNotFound from '../views/PageNotFound'
import SuccesfullRegister from '../views/SuccesfullRegisterView'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Login />}
        />
        <Route
          path="Home"
          element={<Home />}
        />
        <Route
          path="/register"
          element={<Register />}
        />
        {/* 👇️ only match this when no other routes match */}
        <Route
          path="*"
          element={<PageNotFound />}
        />
        <Route
          path="/SuccesfullRegister"
          element={<SuccesfullRegister />}
        />
      </Routes>
    </BrowserRouter>
  )
}
