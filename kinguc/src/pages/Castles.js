import { useEffect, useState } from 'react'
import { GetCastles } from '../services/PostServices'
import { useNavigate } from 'react-router-dom'

const Castles = (user, authenticated) => {
  let navigate = useNavigate()
  const [castles, setCastles] = useState([])
  
  useEffect(() => {
    const handleCastles = async () => {
      const data = await GetCastles()
      setCastles(data)
    }
    handleCastles()
  }, [])
  
  return ( user && authenticated ) ? (
    <div className="grid">
      {castles.map((castle) => (
        <div className="card" key={castle.id}>
          <h3>{castle.name}</h3>
          <div>
            <img src={castle.image} alt="castle"/>
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

export default Castles