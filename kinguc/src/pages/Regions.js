import { useEffect, useState } from 'react'
import { GetRegions } from '../services/PostServices'
import { useNavigate } from 'react-router-dom'

const Regions = (user, authenticated) => {
  let navigate = useNavigate()
  const [regions, setRegions] = useState([])
  
  useEffect(() => {
    const handleCastles = async () => {
      const data = await GetRegions()
      setRegions(data)
    }
    handleCastles()
  }, [])
  
  return ( user && authenticated ) ? (
    <div className="grid">
      {regions.map((region) => (
        <div className="card" key={region.id}>
          <h3>{region.name}</h3>
          <div>
            <img src={region.image} alt="castle"/>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="protected">
      <h3>Oops! You must be signed in to do that!</h3>
      <button onClick={()=> navigate('/signin')}>Sign In</button>
    </div>

  )
}

export default Regions