import { useState } from 'react'
import { RegisterCastle } from '../services/Auth'
import { useNavigate } from 'react-router-dom'



const NewCastle = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    fort: '',
    servants: '',
    income: '',
    country: '',
    image: ''
  })
  let navigate = useNavigate()

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterCastle({
      name: formValues.name,
      forTypes: formValues.fort,
      servantCount: formValues.servants,
      incomePerCastle: formValues.income,
      country: formValues.country,
      image: formValues.image
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
    <div className="newcastle col">
      <div className="card-overlay centered">
        <form className="col" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="name">Name</label>
            <input
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="John Smith"
              value={formValues.name}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="fort">Type of Fortification</label>
            <input
              onChange={handleChange}
              name="type"
              type="text"
              placeholder="Moat-and-Bailey"
              value={formValues.fort}
              required
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="servants">Servant Count</label>
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
            <label htmlFor="income">Income per year</label>
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
            <label htmlFor="country">Country</label>
            <input
              onChange={handleChange}
              type="text"
              name="country"
              value={formValues.country}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="image">Image</label>
            <input
              onChange={handleChange}
              type="text"
              name="image"
              value={formValues.image}
            />
          </div>
          <button>
            Add Castle
          </button>
        </form>
      </div>
    </div>
  )
}

export default NewCastle