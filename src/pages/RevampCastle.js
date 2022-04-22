import { useEffect, useState } from 'react'
import { UpdateCastle, GetCastle } from '../services/CastleService'
import { useNavigate, useParams } from 'react-router-dom'
import '../styles/forms.css'


const RevampCastle = ({user, authenticated}) => {
    const navigate = useNavigate()
    
    const { id } = useParams()
    
    const [formValues, setFormValues] = useState({
        name: '',
        forTypes: '',
        servantCount: '',
        incomePerCastle: '',
        country: '',
        image: '',
    })

    const handleCastleInfo = async () => {
        let data = await GetCastle(id)
        setFormValues(data)
        console.log(data)
    }

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await UpdateCastle(formValues, id)
        alert(`You've successfully revamped this castle!`)
        navigate('/castles')
    }

    useEffect(() => {
        handleCastleInfo()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return ( user && authenticated ) ? (
        <div className="form-box">
          <div className="card-overlay centered">
            <h5>{user.username} is revamping a castle...</h5>
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
                  name="forTypes"
                  type="text"
                  placeholder="Moat-and-Bailey"
                  value={formValues.forTypes}
                  required
                />
              </div>
    
              <div className="input-wrapper">
                <label className='title' htmlFor="servants">Servant Count</label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="servantCount"
                  placeholder='500'
                  value={formValues.servantCount}
                  required
                />
              </div>
              <div className="input-wrapper">
                <label className='title' htmlFor="income">Income (per year)</label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="incomePerCastle"
                  placeholder='10000'
                  value={formValues.incomePerCastle}
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
                  type="link"
                  name="image"
                  placeholder="image url"
                  value={formValues.image}
                />
              </div>
              <button className="button">
                Revamp Castle
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="protected">
          <h3>Oops! You must be signed in as a Noble to add a castle! Please see your local leige if you wish to become a peer of the realm.</h3>
          <button onClick={()=> navigate('/signin')}>Sign In</button>
        </div>
      )
}

export default RevampCastle