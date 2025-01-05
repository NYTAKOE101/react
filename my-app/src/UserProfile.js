import React from 'react';
import useUserStore from './useUserStore';

const UserProfile = () => {
  const { user, setName, setEmail, setPhone, login, logout } = useUserStore();
  
  return (
    <div>
      <h1>User Profile</h1>
      {user.isAuthenticated ? (
        <>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <input 
            type="text" 
            placeholder="Name" 
            onChange={(e) => setName(e.target.value)} 
          />
          <input 
            type="email" 
            placeholder="Email" 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <input 
            type="text" 
            placeholder="Phone" 
            onChange={(e) => setPhone(e.target.value)} 
          />
          <button onClick={() => login(user.name, user.email, user.phone)}>Login</button>
        </>
      )}
    </div>
  );
};

export default UserProfile;
