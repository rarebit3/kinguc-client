import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router'
import { CheckSession } from './services/Auth'
import Nav from './components/Nav'
import Register from './pages/Register'
import SignIn from './pages/SignIn'
import Castles from './pages/Castles'
import Home from './pages/Home'
import './styles/App.css'

const App = () => {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const handleLogOut = () => {

    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)

  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <Nav
        authenticated={authenticated}
        user={user}
        handleLogOut={handleLogOut}
        
      />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/signin" element={
          
          <SignIn 
          setUser={setUser}
          toggleAuthenticated={toggleAuthenticated}
          />} />
          
          <Route path="/register" element={<Register />} />
          
          <Route path="/feed" element={
          <Castles 
          user={user} 
          authenticated={authenticated}
          />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
