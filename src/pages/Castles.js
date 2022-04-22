import { useEffect, useState } from "react";
import { DemolishCastle, GetCastles } from "../services/CastleService";
import { useNavigate } from "react-router-dom";
import "../styles/castle.css";

const Castles = ({ user, authenticated }) => {
  let navigate = useNavigate();
  const [castles, setCastles] = useState([]);

  const handleCastles = async () => {
    const data = await GetCastles()
    setCastles(data);
  }

  const handleDemolish = async (e, castleId) => {
    e.preventDefault()
    if(window.confirm('Are you sure you want to demolish this castle?\nClick OK to confrim.')) {
      await DemolishCastle(castleId)
      await handleCastles()
    }
  }

  useEffect(() => {
    handleCastles()
  }, [])

  return user && authenticated ? (
    <div className="pagediv">
      <button onClick={() => navigate(`/addcastle/${user.id}`)}>
        Add a Castle
      </button>
      <div className="grid">
        {castles.map((castle) => (
          <div className="card" key={castle.id}>
            <h3>Name: {castle.name}</h3>
            <h3>Type: {castle.forTypes}</h3>
            <h3>Servant Count: {castle.servantCount}</h3>
            <h3>Income: {castle.incomePerCastle}</h3>

            <h3>{castle.location.name}</h3>
            <div className="imagediv">
              <img src={castle.image} alt="castle" />
            </div>
            <button onClick={(e) => handleDemolish(e, castle.id)}>Demolish Castle</button>
          </div>
        ))}
      </div>
      <button
        className="button"
        onClick={() => navigate(`/addcastle/${user.id}`)}
      >
        Add a Castle
      </button>
    </div>
  ) : (
    <div className="grid">
      {castles.map((castle) => (
        <div className="card" key={castle.id}>
          <h3>{castle.name}</h3>
          <h3>{castle.forType}</h3>
          <h3>{castle.region}</h3>
          <div>
            <img src={castle.image} alt="castle" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Castles;
