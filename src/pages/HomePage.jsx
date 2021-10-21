import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUserLogin } from '../redux/actions';

const HomePage = () => {
  const [ typeLogin, setTypeLogin ] = useState('');
  const [ typePassword, setTypePassword ] = useState(0);

  const dispatch = useDispatch();

  const handleTypeLogin = (e) => {
    setTypeLogin(e.target.value);
  };

  const handleTypePassword = (e) => {
    setTypePassword(Number(e.target.value));
  };

  const handleButtonClick = () => {
    dispatch(setUserLogin(typeLogin));
  };

  let activeButton = 'btn-secondary disabled';
  let activeLink = 'link-disabled';

  if (typeLogin === 'developer21' && typePassword === 123456) {
    activeButton = 'btn-primary';
    activeLink = '';
  }

  return (
    <div className="container">
      <div className="form-floating mb-3">
        <input type="text" className="form-control" id="floatingInput" placeholder="Login" onChange={handleTypeLogin} />
        <label htmlFor="floatingInput">Login</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
          onChange={handleTypePassword}
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>

      <Link to="/profile" className={activeLink}>
        <div className="text-center">
          <button type="button" className={`btn btn-lg ${activeButton}`} onClick={handleButtonClick}>
            Войти
          </button>
        </div>
      </Link>
    </div>
  );
};

export default HomePage;
