import { useNavigate } from 'react-router-dom'


const RedirectPeasant = () => {
  let navigate = useNavigate()

  return (
    <div className="redirect col">
      <img src="" alt="check out some castles"/>


          <h2>Sorry! Registration is only for Nobles! But You can click the button to see some castles!</h2>
        <button 
        onClick={() => navigate('/castles')}>Castles
        </button>
    </div>
  )
}

export default RedirectPeasant