import { Route, Routes } from 'react-router-dom'
import './App.css'
import UserHome from './pages/user/UserHome'
import UserAuth from './pages/user/UserAuth'
import PageNotFound from './pages/user/PageNotFound'
import AuthenticatedHome from './pages/user/AuthenticatedHome'

function App() {

  return (
    <>
      <Routes>
        < Route path = '/' element = {< UserHome />} />
        < Route path = '/register' element = {< UserAuth register = {true} />} />
        < Route path = '/login' element = {< UserAuth register = {false} />} />

        < Route path = '/authenticatedHome' element = {< AuthenticatedHome />} />

        < Route path = '*' element = {< PageNotFound />} />
      </Routes>
    </>
  )
}

export default App
