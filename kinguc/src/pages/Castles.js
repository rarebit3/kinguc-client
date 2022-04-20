import { useEffect, useState } from 'react'
import { GetCastles } from '../services/CastleService'
import { useNavigate } from 'react-router-dom'

const Castles = ({user, authenticated}) => {
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
        <button onClick={() => navigate(`/addcastle/${user.id}`)}>Add a Castle</button>
      {castles.map((castle) => (
        <div className="card" key={castle.id}>
          <h3>{castle.name}</h3>
          <h3>{castle.forTypes}</h3>
          <h3>{castle.servantCount}</h3>
          <h3>{castle.incomePerCastle}</h3>
          {/* <h3>{castle.location.name}</h3> */}
          <div>
            <img src={castle.image} alt="castle"/>
          </div>
        </div>
      ))}
            {/* <button onClick={() => navigate('/addcastle')}>Add a Castle</button> */}
    </div>
  ) : (
    <div className="grid">
      {castles.map((castle) => (
        <div className="card" key={castle.id}>
          <h3>{castle.name}</h3>
          <h3>{castle.forType}</h3>
          <h3>{castle.region}</h3>
          <div>
            <img src={castle.image} alt="castle"/>
          </div>
        </div>
      ))}
    </div>
    )
  }

export default Castles