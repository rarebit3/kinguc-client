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
    navigate('/myinfo')

  } else {
    navigate('/redirectp')
  }
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
            <label htmlFor="username">Username</label>
            <input
              onChange={handleChange}
              name="username"
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
          <div className="input-wrapper checkbox">
            <label htmlFor="nobility">Nobility</label>
            <input
            type="checkbox"
            name="checkedOne"
            checked={formValues.checkedOne} 
            onChange={handleChange}
            />
          </div>
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