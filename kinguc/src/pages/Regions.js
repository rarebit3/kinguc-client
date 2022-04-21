import { useEffect, useState } from 'react'
import { GetRegions } from '../services/RegionService'
import { useNavigate } from 'react-router-dom'

const Regions = (user, authenticated) => {
  let navigate = useNavigate()
  const [regions, setRegions] = useState([])
  
  useEffect(() => {
    const handleRegions = async () => {
      const data = await GetRegions()
      setRegions(data)
    }
    handleRegions()
  }, [])
  
  return ( user && authenticated ) ? (
    <div className="grid">
      {regions.map((region) => (
        <div className="card" key={region.id}>
          <h3>Name: {region.name}</h3>
          <h3>Population: {region.population}</h3>
          <h3>Number of Nobles:{region.numberOfNobles}</h3>
          <h3>Capital:{region.capitalCity}</h3>
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