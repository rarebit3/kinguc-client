import { useState } from 'react'
import { RegisterUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'
import '../styles/forms.css'

const Register = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    username: '',
    magicEmail: '',
    password: '',
    confirmPassword: '',
    checkedOne: false
  })
  let navigate = useNavigate()

  const handleChange = (e) => {
      const value =
        e.target.type === "checkbox" ? e.target.checked : e.target.value 
    setFormValues({ ...formValues, 
      [e.target.name]: value 
      })
      console.log(formValues)
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formValues.checkedOne === true) {
    await RegisterUser({
      name: formValues.name,
      username: formValues.username,
      magicEmail: formValues.magicEmail,
      password: formValues.password,
      highAbility: true
    })
    setFormValues({
      name: '',
      username: '',
      magicEmail: '',
      password: '',
      confirmPassword: '',
    })
    navigate('/userinfo')

  } else {
    navigate('/redirectp')
  }
}

  return (
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
          <div className="input-wrapper">
            <label className='title' htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={formValues.password}
              required
            />
          </div>
          <div className="input-wrapper">
            <label className='title' htmlFor="confirmPassword">Confirm Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="confirmPassword"
              value={formValues.confirmPassword}
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
              (!formValues.password &&
                formValues.confirmPassword === formValues.password)
            }
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register