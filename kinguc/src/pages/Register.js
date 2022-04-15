import { useState } from 'react'
import { RegisterUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    username: '',
    magicEmail: '',
    password: '',
    confirmPassword: '',
    highAbility: false
  })
  let navigate = useNavigate()

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      name: formValues.name,
      magicEmail: formValues.magicEmail,
      password: formValues.password,
      highAbility: formValues.highAbility
    })
    setFormValues({
      name: '',
      username: '',
      magicEmail: '',
      password: '',
      confirmPassword: '',
      highAbility: false
    })
    //High nobility redirect
    //  (highAbility) ? navigate('/signin') : navigate('/redirectpeasant')

  }

  return (
    <div className="signin col">
      <div className="card-overlay centered">
        <form className="col" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="name">Name</label>
            <input
              onChange={handleChange}
              name="name"
              type="text"
              placeholder=""
              value={formValues.name}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="username">Name</label>
            <input
              onChange={handleChange}
              name="name"
              type="text"
              placeholder=""
              value={formValues.username}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="magicEmail">Magic Email</label>
            <input
              onChange={handleChange}
              name="magicEmail"
              type="email"
              placeholder="example@example.com"
              value={formValues.magicEmail}
              required
            />
          </div>
          {/* High Nobility Checkbock goes here */}
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={formValues.password}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="confirmPassword"
              value={formValues.confirmPassword}
              required
            />
          </div>
          <button
            disabled={
              !formValues.email ||
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