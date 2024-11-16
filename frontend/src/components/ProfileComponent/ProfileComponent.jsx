import React, { useState } from "react";
import "./ProfileComponent.css";

const ProfileComponent = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProfile({ ...profile, profilePicture: URL.createObjectURL(file) });
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  // const handleSaveClick = async () => {
  //   setIsEditing(false);
  //   try {
  //     await axios.put("http://localhost:8085/api/profile", profile);
  //     const response = await axios.get("http://localhost:8085/api/profile");
  //     setProfile(response.data);
  //   } catch (error) {
  //     console.error("Error saving profile data:", error);
  //   }
  // };

  return (
    <div className="profile-container">
      {isEditing ? (
        <div className="profile-form">
          {profile.profilePicture && (
            <img
              src={profile.profilePicture}
              alt="Profile"
              className="profile-picture"
            />
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="file-input"
          />
          <input
            name="firstName"
            value={profile.firstName}
            onChange={handleChange}
            placeholder="First Name"
          />
          <input
            name="lastName"
            value={profile.lastName}
            onChange={handleChange}
            placeholder="Last Name"
          />
          <input
            name="username"
            value={profile.username}
            onChange={handleChange}
            placeholder="Username"
          />
          <input
            name="email"
            value={profile.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <input
            name="address"
            value={profile.address}
            onChange={handleChange}
            placeholder="Address"
          />
          <input
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            placeholder="Phone"
          />
          <input
            name="password"
            type="password"
            value={profile.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </div>
      ) : (
        <div className="profile-details">
          {profile.profilePicture && (
            <img
              src={profile.profilePicture}
              alt="Profile"
              className="profile-picture"
            />
          )}
          <p>First Name: {profile.firstName}</p>
          <p>Last Name: {profile.lastName}</p>
          <p>Username: {profile.userName}</p>
          <p>Email: {profile.email}</p>
          <p>Address: {profile.address}</p>
          <p>Phone: {profile.phone}</p>
        </div>
      )}
    </div>
  );
};

export default ProfileComponent;
