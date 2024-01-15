import React, { useState, useEffect } from 'react'
import './Login.css'
import logo from  '../../assets/img/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import BASE_URL from '../../hooks/baseURL'


export default function Login() {
    const navigate = useNavigate();

    const auth = localStorage.getItem('authToken');
    if(auth){
        useEffect(() => {
            navigate('/'); // Navigate to the home route
        }, [navigate]);
    }

    const [eye, setEye] = useState(false);
    const [data, setData] = useState([]);
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    

    const logIn = (e) =>{
        e.preventDefault();
        const loginData = {
            phone: phone,
            password: password
        };
        //fetch api for login url
        fetch(BASE_URL + '/login', {
            method: 'POST',
            headers: {
              'Accept' : "application/json",
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        }).then(response => {
            if (!response.ok) {
              throw new Error('Login failed');
            }
            return response.json();
        })
        .then(data => {
            // console.log('Login successful:', data);
            setData(data);
            if (data) {
                const userData = data.data.user;
                localStorage.setItem('authToken', data.data.token);
                localStorage.setItem('authUser', JSON.stringify({
                    userData
                }));
                // alert("Logged In Successfully.");
                //redirect to home page
                navigate('/');
            } else {
                throw new Error('Token not found in response');
            }
        })
        .catch(error => {
            console.error('Login error:', error);
        });
      }

  return (
    <>
    {!auth && (
    <div className="text-white homeBody">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 offset-lg-4">
                    <div className="border border-1 rounded-3 shadow-lg p-4 loginCard">
                        <div className="text-center mb-4 me-4">
                            <Link to={'/'}>
                            <img  className='logo' src={logo} />
                            </Link>
                        </div>
                        
                        <h5 className="text-center mb-4">Welcome To Spider-Man Slot</h5>
                        <form onSubmit={logIn}>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Phone</label>
                                <input type="number" className="form-control" id="phone" placeholder='Enter Phone' onChange={(e)=>setPhone(e.target.value)} />
                            </div>
                            <div className="mb-3 password">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type={eye === false ? "password" : "text"} className="form-control" id="password" placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)} />
                                <i className={`fas eye ${eye ? 'fa-eye-slash' : 'fa-eye'}`} onClick={() => setEye(!eye)}></i>
                            </div>
                            <div className="my-4">
                                <button className="btn btn-red w-100 shadow py-2">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )}

    </>
  )
}
