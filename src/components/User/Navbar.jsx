import React, { useState } from 'react'
import '../../assets/css/navbar.css'
import logo from  '../../assets/img/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import BASE_URL from '../../hooks/baseURL'
import BtnSpinner from '../Auth/BtnSpinner'
import useFetch from '../../hooks/useFetch'

const Navbar = () => {
  let auth = localStorage.getItem('authToken');
  let authUser = JSON.parse(localStorage.getItem('authUser'));
  let navigate = useNavigate();
  let [smallLoad, setSmallLoad] = useState(false);
  let url = BASE_URL+'/wallet';
  let {data:wallet, loading, error} = useFetch(url);
  console.log(wallet.ag_wallet);

  const logOut = (e) =>{
    e.preventDefault();
    setSmallLoad(true)
    //fetch api for logout url
    fetch(BASE_URL + '/logout', {
      method: 'POST',
      headers: {
        'Accept' : "application/json",
        'Content-Type': 'application/json',
        'Authorization' : "Bearer " + localStorage.getItem('authToken')
      },
      }).then(response => {
          if (!response.ok) {
            throw new Error('Logout failed');
          }
          setSmallLoad(true);
          return response.json();
      })
      .then(data => {
          localStorage.removeItem('authToken');
          localStorage.removeItem('authUser');
          // alert("Logged Out Successfully.");
          setSmallLoad(false)
          navigate('/login');
      })
      .catch(error => {
          console.error('Logout error:', error);
      });
  }

  return (
    <>
    {!auth && (
      <div className='navbar d-flex justify-content-between justify-content-lg-center'>
        <img  className='logo ' src={logo} />
        <Link to={'/login'} className="loginBtn text-decoration-none">Login</Link>
      </div>
    )}
    {auth && (
      <div className='navbar d-flex justify-content-between'>
        <div>
        <img  className='logo' src={logo} />
        </div>
        <div className=''>
            <div className="dropstart d-inline me-3">
              <a className="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fas fa-wallet text-white" style={{ fontSize: "20px" }}></i>
              </a>
              <ul className="dropdown-menu">
                {wallet && (
                  <>
                  <li>
                    <a className="dropdown-item" href="#">{wallet.ag_wallet}</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">{wallet.gb_wallet}</a>
                  </li>
                  </>
                )}
              </ul>
            </div>
          <Link className='text-decoration-none text-white me-4'>
            {!authUser.userData.profile && <i className="fa-regular fa-user-circle" style={{ fontSize: "20px" }}></i>}
          </Link>
          <button className="loginBtn" onClick={logOut}>
            {smallLoad && <BtnSpinner />}
            Logout
          </button>
        </div>
      </div>
    )}
    </>
  )
}

export default Navbar
