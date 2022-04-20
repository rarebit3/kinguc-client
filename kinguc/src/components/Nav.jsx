import { Link } from 'react-router-dom'
import "../styles/navbar.css"

const Nav = ({ authenticated, user, handleLogOut }) => {
  let authenticatedOptions
  if (user) {
    authenticatedOptions = (
      <nav>
        <h3 className='navbar'>Welcome {user.username}!</h3>

        <Link to="/search">Search</Link>
        <Link to="/regions">Regions</Link>
        <Link to="/castles">Castles</Link>
        <Link to="/regions">Regions</Link>
        <Link to="/userinfo">User Details</Link>
        <Link 
        onClick={handleLogOut} to="/">
        Sign Out
        </Link>
      </nav>
    )
  }

  const publicOptions = (
    <nav className='navbar'>
      <Link to="/">Home</Link>
      <Link to="/castles">Castles</Link>
      <Link to="/register">Register</Link>
      <Link to="/signin">Sign In</Link>
    </nav>
  )

  return (
    <header>
      <Link to="/">
        <div className="logo-wrapper" alt="logo">
          <img
            className="logo"
            src=""
            alt="welcome banner"
          />
        </div>
      </Link>
      {authenticated && user ? authenticatedOptions : publicOptions}
    </header>
  )
}

export default Nav