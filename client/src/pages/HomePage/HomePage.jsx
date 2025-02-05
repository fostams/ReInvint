import { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginSignupModal from '../../components/LoginSignupModal/LoginSignupModal';
import './HomePage.scss';

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const openModal = () => {
    setIsLogin(true);
    setIsModalOpen(true);
  };

  return (
    <div className="homepage">
      <section className="hero">
          <h1 className="hero__title">Revamp. Rewear. <i>Re</i>Invint.</h1>
        <div className="hero__buttons">
          <button className="hero__button" onClick={openModal}>LOG IN</button>
          <Link to="/about">
            <button className="hero__button">LEARN MORE</button>
          </Link>
        </div>
      </section>
      
      {/* Conditional rendering: The modal only appears when isModalOpen is true */}
      {isModalOpen && (
        <LoginSignupModal 
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          closeModal={() => setIsModalOpen(false)} 
        />
      )}
    </div>
  );
};

export default HomePage;