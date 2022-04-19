import { useEffect, useState } from 'react'
import { GetUser } from '../services/UserService.js'
import { useNavigate } from 'react-router-dom'

const UserInfo = ({user, authenticated}) => {
  let navigate = useNavigate()
  const [userInfo, setUserInfo] = useState([])

  
  
  return ( user && authenticated ) ? (
    <div className="grid">
        <div className="card" key={user.id}>
          <h3>{user.name}</h3>
          <h3>{user.magicEmail}</h3>
          </div>
    </div>
  ) : (
    <div className="protected">
      <h3>Oops! You must be signed in to do that!</h3>
      <button onClick={()=> navigate('/signin')}>Sign In</button>
    </div>

  )
}
export default UserInfo