import React, { useState } from 'react';
import AddUser from './AddUser';

const Login = () => {
  const [token, setToken] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showLogin, setShowLogin] = useState(true); 

  async function handleLoginSubmit(e) {
    e.preventDefault();
    if (username === 'mor_2314' && password === '83r5^_') {
      try {
        const response = await fetch('https://fakestoreapi.com/auth/login', {
          method: 'POST',
          body: JSON.stringify({
            username: 'mor_2314',
            password: '83r5^_',
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();
        if (data.token) {
          setToken(data.token);
          setSuccessMessage('Login successful!');
        }
      } catch (error) {
        console.log(error);
        setErrorMessage('Failed to login');
      }
    } else {
      setErrorMessage('Incorrect credentials');
    }
  }

  return (
    <section className="h-screen flex justify-center items-center">
      <div>
        {showLogin ? (
          
          <div className="bg-slate-390 border border-slate-100 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative">
            <h1 className="text-4xl font-light text-center mb-6">Login</h1>
            <form action="" onSubmit={handleLoginSubmit}>
             
              <div className="relative my-4">
                <input
                  type="text"
                  name='username' id='username'
                  className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-slate-500 focus:outline-none focus:ring-0 focus:text-neutral-950 focus:border-slate-600 peer"
                  placeholder=""
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label
                  htmlFor="username"
                  className="absolute text-sm duration-300 transform -translate scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-600 peer-focus:dark:text-slate-500 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Username
                </label>
              </div>
              <div className="relative my-4">
                <input
                  type="password"
                  name='password' id='password'
                  className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-slate-500 focus:outline-none focus:ring-0 focus:text-neutral-950 focus:border-slate-600 peer"
                  placeholder=""
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label
                  htmlFor="password"
                  className="absolute text-sm duration-300 transform -translate scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-600 peer-focus:dark:text-slate-500 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Password
                </label>
              </div>
              <button
                type="submit"
                className="w-full mb-4 text-white mt-6 rounded bg-neutral-900 py-2 hover-bg-neutral-950 transitioncolors duration-300"
              >
                Sign in
              </button>
            </form>
            {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
            {successMessage && <p className='text-green-500 font-semibold text-center mt-4 py-5'>{successMessage}</p>}
            {token && <p>Authentication token: {token}</p>}
            <button
              onClick={() => setShowLogin(false)} 
              className="w-full bg-neutral-900 text-white py-2 rounded hover-bg-neutral-950 transition duration-300 mt-2"
            >
              Create Account
            </button>
          </div>
        ) : (
         
          <AddUser />
        )}
      </div>
    </section>
  );
};

export default Login;