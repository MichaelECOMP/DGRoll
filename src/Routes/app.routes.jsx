import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from '../../components/Pages/Home'
import Register from '../../components/Pages/Register'
import Login from '../../components/Pages/Login'
import DefaultLayout from "../../components/layout/DefaultLayout"

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DefaultLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/cadastro' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes