import React, { useState } from 'react';

const AddUser = () => {
  const [newUser, setNewUser] = useState({
    email: '',
    username: '',
    password: '',
    name: {
      firstname: '',
      lastname: ''
    },
    address: {
      city: '',
      street: '',
      number: 0,
      zipcode: '',
      geolocation: {
        lat: '',
        long: ''
      }
    },
    phone: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://fakestoreapi.com/users', {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 201) {
        const data = await response.json();
        setSuccessMessage('User added successfully');
        setErrorMessage('');
        console.log(data);
      } else {
        setSuccessMessage('');
        setErrorMessage('Failed to add user');
      }
    } catch (error) {
      console.error(error);
      setSuccessMessage('');
      setErrorMessage('Failed to add user');
    }
  };

  return (
    <section className="h-screen flex justify-center items-center">
      <div>
        <div className="bg-slate-390 border border-slate-100 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative">
          <h1 className="text-4xl font-light text-center mb-6">Register</h1>
          <form action = "" onSubmit={handleSubmit}>
            <div className="relative my-4">
              <input
                type="text"
                name="email"
                value={newUser.email}
                onChange={handleInputChange}
                placeholder=""
                className="block w-72 py-2.5 px-0 text-neutral-950 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-slate-600 peer"
              />
                <label
                  htmlFor="Email"
                  className="absolute text-sm duration-300 transform -translate scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email
                </label>
            </div>
            <div className="relative my-4">
              <input
                type="text"
                name="username"
                value={newUser.username}
                onChange={handleInputChange}
                placeholder=""
                className="block w-72 py-2.5 px-0 text-neutral-950 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-slate-600 peer"
                
              />
              <label
                  htmlFor="Username"
                  className="absolute text-sm duration-300 transform -translate scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Username
                </label>

            </div>
            <div className="relative my-4">
              <input
                type="password"
                name="password"
                value={newUser.password}
                onChange={handleInputChange}
                placeholder=""
                className="block w-72 py-2.5 px-4 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-slate-500 focus:outline-none focus:ring-0 focus:text-neutral-950 focus:border-slate-600 peer"
              />
                 <label
                  htmlFor="Password"
                  className="absolute text-sm duration-300 transform -translate scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Password
                </label>
            </div>
            <div className="my-4">
              <button type="submit" className="w-full bg-neutral-900 text-white py-2 rounded hover-bg-neutral-950 transition duration-300">
                Add User
              </button>
            </div>
          </form>
          {successMessage && <p>{successMessage}</p>}
          {errorMessage && <p>{errorMessage}</p>}
        </div>
      </div>
    </section>
  );
};

export default AddUser;

