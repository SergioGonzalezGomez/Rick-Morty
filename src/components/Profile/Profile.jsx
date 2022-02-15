import React from 'react';
import ProfileContext from '../../contexts/ProfileContext';
import { useContext } from 'react';
import './Profile.css';
const Profile = () => {
   
  const {profile} = useContext(ProfileContext);
  return <div className="profile-figure">
      
      <img className="profile-img" src={profile.image}/>
      <p className="profile-p">{profile.name}</p>
  </div>;
};

export default Profile;
