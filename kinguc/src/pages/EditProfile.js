import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { GetUser } from "../services/UserService"
import { UpdateProfile } from "../services/Auth"


const EditProfile = ({user, authenticated, handleLogOut}) => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [formValues, setFormValues] = useState({
        name: '',
        username: '',
        magicEmail: '',
        checkedOne: false
      })
    
    const handleUserInfo = async () => {
        let data = await GetUser(id)
        setFormValues({
            name: data.name,
            username: data.username,
            magicEmail: data.magicEmail,
            checkedOne: data.highAbility
        })
    }


    useEffect(()=> {
        handleUserInfo()
    }, [])

    
  const handleChange = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
    setFormValues({ 
        ...formValues, 
        [e.target.name]: value 
    })
 
}

    const handleSubmit = async (e) => {
        e.preventDefault()
        await UpdateProfile(formValues, id)
        await handleLogOut()
        alert(`You've successully updated your profile!\n Please sign in again.`)
        navigate('/signin')
       
    }
    
    return ( user && authenticated ) ? (
    <div className="form-box">
      <div className="card-overlay centered">
        <form className="col" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label className='title' htmlFor="name">Name</label>
            <input
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="Lord John Doe of the Southern Reach"
              value={formValues.name}
              required
            />
          </div>
          <div className="input-wrapper">
            <label className='title' htmlFor="username">Username</label>
            <input
              onChange={handleChange}
              name="username"
              type="text"
              placeholder="JDoe123"
              value={formValues.username}
              required
            />
          </div>
          <div className="input-wrapper">
            <label className='title' htmlFor="magicEmail">Magic Email</label>
            <input
              onChange={handleChange}
              name="magicEmail"
              type="email"
              placeholder="example@example.com"
              value={formValues.magicEmail}
              required
            />
          </div>
  
          <div className="input-wrapper checkbox">
            <label className='title' htmlFor="nobility">Are you a Noble?</label>
            <input
            type="checkbox"
            name="checkedOne"
            checked={formValues.checkedOne} 
            onChange={handleChange}
            />
          </div>
          <button
            disabled={
              !formValues.magicEmail ||
              !formValues.username ||
              !formValues.name
            }>
            Update Profile
          </button>
        </form>
      </div>
    </div>
  ) : (
    <div className="protected">
      <h3>Oops! You must be signed in as a Noble to edit your profile! Please see your local leige if you wish to become a peer of the realm.</h3>
      <button onClick={()=> navigate('/signin')}>Sign In</button>
    </div>
  )
}

export default EditProfile