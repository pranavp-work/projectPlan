import { Route, Routes } from 'react-router-dom'
import './App.css'
import UserHome from './pages/user/UserHome'
import UserHeader from './components/user/UserHeader'
import UserFooter from './components/user/UserFooter'
import UserAuth from './pages/user/UserAuth'
import PageNotFound from './pages/user/PageNotFound'

function App() {

  return (
    <>
      < UserHeader />

      <Routes>
        < Route path = '/' element = {< UserHome />} />
        < Route path = '/register' element = {< UserAuth register = {true} />} />
        < Route path = '/login' element = {< UserAuth register = {false} />} />

        < Route path = '*' element = {< PageNotFound />} />
      </Routes>

      < UserFooter />
    </>
  )
}

export default App
