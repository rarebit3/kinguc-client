import { useNavigate } from 'react-router-dom'
import { DeleteUser } from '../services/Auth.js'

const UserInfo = ({user, authenticated, handleLogOut}) => {
  let navigate = useNavigate()

  const handleDelete = async (e, userId) => {
    e.preventDefault()
    if(window.confirm('Are you sure you want to delete your account?\nOnce you delete it, it cannot be undone.\nClick OK to Delete.')) {
      await DeleteUser(userId)
      alert('Your account has been successfully deleted!')
      await handleLogOut()
      navigate('/signin')
    } 
  }
  
  
  return ( user && authenticated ) ? (
    <div className="grid">
        <div className="card" key={user.id}>
          <h3>{user.name}</h3>
          <h3>{user.magicEmail}</h3>
          <button onClick={()=> navigate(`/userinfo/editpassword/${user.id}`)}>Change Password</button>
          <button onClick={()=> navigate(`/userinfo/update/${user.id}`)}>Update Profile</button>
          <button onClick={(e) => handleDelete(e, user.id)}>Delete Account</button>
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