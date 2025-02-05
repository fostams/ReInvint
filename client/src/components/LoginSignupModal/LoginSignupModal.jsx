import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LoginSignupModal.scss';

const LoginSignupModal = ({ isLogin, setIsLogin, closeModal }) => {
  const [isLoginMode, setIsLoginMode] = useState(isLogin);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  // Handle form submission for both login & signup
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Determine the endpoint based on login or signup mode
    const endpoint = isLoginMode ? '/login' : '/signup';

    // Collect form input values
    const payload = {
      username: e.target.username.value,
      password: e.target.password.value,
      ...(isLoginMode ? {} : { name: e.target.name.value }),
    };

    try {
      const response = await axios.post(`http://localhost:8080${endpoint}`, payload);

      if (!isLoginMode) {
        setIsLoginMode(true);
      } else if (response.data.token) {
          sessionStorage.setItem('authToken', response.data.token);
          closeModal();
          navigate('/profile');
      } else {
          setErrorMessage('Authentication failed: No token received.');
      }
    } catch (error) {
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="modal">
      {/* Modal Content */}
      <div className="modal__content">
        <button className="modal__close" onClick={closeModal}>×</button>
        <h2 className="modal__title">{isLoginMode ? 'Log In' : 'Sign Up'}</h2>
        {errorMessage && <p className="modal__error">{errorMessage}</p>}

         {/* Login/Signup Form */}
        <form onSubmit={handleSubmit}>
          <input className="modal__input" type="text" name="username" placeholder="Username" required />
          {!isLoginMode && <input className="modal__input" type="text" name="name" placeholder="Name" required />}
          <input className="modal__input" type="password" name="password" placeholder="Password" required />
          <button type="submit" className="modal__submit">{isLoginMode ? 'Log In' : 'Sign Up'}</button>
        </form>

        {/* Toggle between Login & Signup */}
        <p className="modal__switch">
          {isLoginMode ? "Don't have an account? " : "Already a member? "}
          <button type="button" className="modal__toggle" onClick={() => setIsLoginMode(!isLoginMode)}>
            {isLoginMode ? "Sign Up" : "Log In"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginSignupModal;