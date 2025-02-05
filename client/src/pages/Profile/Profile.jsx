import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import WardrobeSection from "../../components/WardrobeSection/WardrobeSection";
import defaultAvatar from '../../assets/icons/default-avatar.png';
import shirtIcon from '../../assets/icons/shirt-green.png';
import outfitIcon from '../../assets/icons/outfit-green.png';
import closetIcon from '../../assets/icons/closet-green.png';
import './Profile.scss';

const Profile = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("clothes");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = sessionStorage.getItem('authToken');
        if (!token) {
          throw new Error('No token found');
        }

        const response = await axios.get('http://localhost:8080/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUserInfo(response.data);
      } catch (error) {
        console.error(error);
        setError('Failed to load profile. Please try again later.');
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('authToken');
    navigate('/');
  };

  if (error) return <p>{error}</p>;
  if (!userInfo) return <p>Loading...</p>;

  return (
    <div className="profile">
      {/* Profile Header */}
      <div className="profile-header">
        <div className="profile-header__info">
          <img 
            src={userInfo.profilePic ? userInfo.profilePic : defaultAvatar} 
            alt="Profile" 
            className="profile-header__img" 
          />
          <div className="profile-header__names">
            <p className="profile-header__username">@{userInfo.username || 'username' }</p>
            <p className="profile-header__name">{userInfo.name || 'User'}</p>
          </div>
        </div>
        <button className="profile-header__logout" onClick={handleLogout}>Logout</button>
      </div>

      {/* Navigation Tabs */}
      <div className="profile-tabs">
        <button 
          className={`profile-tabs__btn ${activeTab === "clothes" ? "active" : ""}`} 
          onClick={() => setActiveTab("clothes")}
        >
          <img src={shirtIcon} alt="Clothes" className="profile-tabs__icon" />
        </button>
        <button 
          className={`profile-tabs__btn ${activeTab === "outfits" ? "active" : ""}`} 
          onClick={() => setActiveTab("outfits")}
        >
          <img src={outfitIcon} alt="Outfits" className="profile-tabs__icon" />
        </button>
        <button 
          className={`profile-tabs__btn ${activeTab === "wardrobe" ? "active" : ""}`} 
          onClick={() => setActiveTab("wardrobe")}
        >
          <img src={closetIcon} alt="Wardrobe" className="profile-tabs__icon" />
        </button>
      </div>

      {/* Conditional Rendering for Sections */}
      {activeTab === "clothes" && <WardrobeSection />}
      {activeTab === "outfits" && <div className="outfits-section"><p>Make your outfits here!</p></div>}
      {activeTab === "wardrobe" && <div className="wardrobe-section"><p>Organize your wardrobe here!</p></div>}
    </div>
  );
};

export default Profile;