import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const ProfilePage = () => {
  const { login } = useSelector((state) => state);

  return login === 'developer21' ? (
    <div>
      <h1>{login}</h1>
    </div>
  ) : (
    <Redirect to="/" />
  );
};

export default ProfilePage;
