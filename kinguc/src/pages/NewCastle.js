import { useEffect, useState } from 'react'
import { AddCastle } from '../services/CastleService'
import { useNavigate, useParams } from 'react-router-dom'
import { GetUser } from '../services/UserService'
import '../styles/forms.css'



const NewCastle = ({user, authenticated}) => {
  const { id } = useParams()
  const [userInfo, setUserInfo] = useState(null)

  const handleUser = async () => {
    let data = await GetUser(id)
    setUserInfo(data)
  }
  useEffect(()=>{
    handleUser()
  }, [])

  const [formValues, setFormValues] = useState({
    name: '',
    fort: '',
    servants: '',
    income: '',
    country: '',
    image: '',
    
  })
  let navigate = useNavigate()

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await AddCastle({
      name: formValues.name,
      forTypes: formValues.fort,
      servantCount: formValues.servants,
      incomePerCastle: formValues.income,
      country: formValues.country,
      image: formValues.image,
      userId: userInfo.id,
      regionId: userInfo.ruler_of.id
    })
    setFormValues({
      name: '',
      fort: '',
      servants: '',
      income: '',
      country: '',
      image: ''
    })
    navigate('/castles')
  }

  return (
    <div className="form-box">
      <div className="card-overlay centered">
        <h5>{user.username} is adding a castle to their collection...</h5>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label className='title' htmlFor="name">Name</label>
            <input
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="The Bastille"
              value={formValues.name}
              required
            />
          </div>
          <div className="input-wrapper">
            <label className='title' htmlFor="fort">Type of Fortification</label>
            <input
              onChange={handleChange}
              name="fort"
              type="text"
              placeholder="Moat-and-Bailey"
              value={formValues.fort}
              required
            />
          </div>

          <div className="input-wrapper">
            <label className='title' htmlFor="servants">Servant Count</label>
            <input
              onChange={handleChange}
              type="text"
              name="servants"
              placeholder='500'
              value={formValues.servants}
              required
            />
          </div>
          <div className="input-wrapper">
            <label className='title' htmlFor="income">Income (per year)</label>
            <input
              onChange={handleChange}
              type="text"
              name="income"
              placeholder='10000'
              value={formValues.income}
              required
            />
          </div>
          <div className="input-wrapper">
            <label className='title' htmlFor="country">Country</label>
            <input
              onChange={handleChange}
              type="text"
              name="country"
              placeholder="USA"
              value={formValues.country}
              required
            />
          </div>
          <div className="input-wrapper">
            <label className='title' htmlFor="image">Image</label>
            <input
              onChange={handleChange}
              type="file"
              name="image"
              placeholder="image url"
              value={formValues.image}
            />
          </div>
          <button className="button">
            Submit Castle
          </button>
        </form>
      </div>
    </div>
  )
}

export default NewCastle