import { useNavigate } from 'react-router-dom'
import "../styles/home.css"

const Home = () => {
  let navigate = useNavigate()

  return (
    <div className="home-container col">
         

      <section className="welcome-signin">
        <button onClick={() => navigate('/signin')}>
        <img className='castlehome' src ="https://i.pinimg.com/736x/49/7a/36/497a3626cb2cdd528ac9a3e81fc6eef6.jpg" alt="welcome"/> 
        <div className='getstarted'>Click Here To Get Started</div>
          
        </button>
      </section>
    </div>
  )
}

export default Home
