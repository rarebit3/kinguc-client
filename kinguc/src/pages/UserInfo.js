import { useEffect, useState } from 'react'
import { GetUser } from '../services/UserService.js'
import { useNavigate } from 'react-router-dom'
import { DeleteUser } from '../services/Auth.js'

const UserInfo = ({user, authenticated, handleLogOut}) => {
  let navigate = useNavigate()
  const [userInfo, setUserInfo] = useState([])

  const handleDelete = async (e, userId) => {
    e.preventDefault()
    if(window.confirm('Are you sure you want to delete your account?\nOnce you delete it, it cannot be undone.\nClick OK to Delete.')) {
      console.log('delete')
      await DeleteUser(userId)
      alert('Your account has been successfully deleted!')
      await handleLogOut()
      navigate('/signin')
    } else {
      console.log('did not delete')
    }
  }
  
  
  return ( user && authenticated ) ? (
    <div className="grid">
        <div className="card" key={user.id}>
          <h3>{user.name}</h3>
          <h3>{user.magicEmail}</h3>
        </div>
        <button onClick={()=> navigate(`/userinfo/editpassword/${user.id}`)}>Change Password</button>
        <button onClick={(e) => handleDelete(e, user.id)}>Delete Account</button>

    </div>
  ) : (
    <div className="protected">
      <h3>Oops! You must be signed in to do that!</h3>
      <button onClick={()=> navigate('/signin')}>Sign In</button>
    </div>

  )
}
export default UserInfo