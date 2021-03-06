import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router'
import { CheckSession } from './services/Auth'
import Nav from './components/Nav'
import Register from './pages/Register'
import SignIn from './pages/SignIn'
import Castles from './pages/Castles'
import Home from './pages/Home'
import Regions from './pages/Regions'
import UserInfo from './pages/UserInfo'
import NewCastle from './pages/NewCastle'
import TestSearch from './pages/TestSearch'
import ChangePassword from './pages/ChangePassword'
import EditProfile from './pages/EditProfile'
import RedirectPeasant from './pages/RedirectPeasant'
import './styles/App.css'
import RevampCastle from './pages/RevampCastle'


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
            />}
          />
          
          <Route path="/register" element={
            <Register 
            user={user} 
            authenticated={authenticated}
            />}
          />
          
          <Route path="/castles" element={
            <Castles 
            user={user} 
            authenticated={authenticated}
            />}
          />

          <Route path="/addcastle/:id" element={
            <NewCastle 
            user={user} 
            authenticated={authenticated}
            />}
          />
          
          <Route path='/revamp/castle/:id' element={
            <RevampCastle
            user={user} 
            authenticated={authenticated}
            />}
          />

          <Route path="/regions" element={
            <Regions 
            user={user} 
            authenticated={authenticated}
            />}
          />

          <Route path="/userinfo/:id" element={
            <UserInfo 
            user={user} 
            authenticated={authenticated}
            handleLogOut={handleLogOut}
            />}
          />

          <Route path='/search' element={
            <TestSearch
            user={user} 
            authenticated={authenticated}
            />}
          />

          <Route path='/userinfo/editpassword/:id' element={
            <ChangePassword
            user={user} 
            authenticated={authenticated}
            handleLogOut={handleLogOut}
            />}
          />


          <Route path='/userinfo/update/:id' element={
            <EditProfile
            user={user}
            authenticated={authenticated}
            handleLogOut={handleLogOut}
          />}
          />


          <Route path='redirectp' element={
            <RedirectPeasant/>
          }
        />

        </Routes>
      </main>
    </div>
  )
}

export default App