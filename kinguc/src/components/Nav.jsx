import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Nav = ({ authenticated, user, handleLogOut }) => {
  let authenticatedOptions;
  if (user) {
    authenticatedOptions = (
      <nav>
        <h3 className="navbar">Welcome {user.username}!</h3>

        <Link to="/search">Search</Link>
        <Link to="/regions">Regions</Link>
        <Link to="/castles">Castles</Link>
        <Link to="/regions">Regions</Link>
        <Link to={`/userinfo/${user.id}`}>User Details</Link>
        <Link 
        onClick={handleLogOut} to="/">
        Sign Out

        </Link>
      </nav>
    );
  }

  const publicOptions = (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/castles">Castles</Link>
      <Link to="/register">Register</Link>
      <Link to="/signin">Sign In</Link>
    </nav>
  );

  return (
    <div className="header-box">
      <header>
        <Link to="/">
          <div className="logo-wrapper" alt="logo">
            <img
              className="castlelogo"
              src="https://i.pinimg.com/736x/49/7a/36/497a3626cb2cdd528ac9a3e81fc6eef6.jpg"
              alt="welcome banner"
            />
          <h3 className="title">Kingdom of the Universal Cluster</h3>
          </div>
        </Link>
        {authenticated && user ? authenticatedOptions : publicOptions}
      </header>
    </div>
  );
};

export default Nav;
