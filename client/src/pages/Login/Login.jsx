import { Link } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  return (
    <div className="homepage">
        {/* Add hanger/recycling flavicon */}
        <h1>Reinvent Your Style.</h1>
        <h2>Reinvent Your Carbon Footprint.</h2>
        <h2>Reinvent with ReInvint.</h2>

        <div className="homepage-buttons">
            <Link to="/login">
                <button className="homepage-button">Log In</button>
            </Link>
            <Link to="/signup">
                <button className="homepage-button">Sign Up</button>
            </Link>
        </div>
        <Link to="/about">About</Link>
    </div>
  );
}

export default Login;