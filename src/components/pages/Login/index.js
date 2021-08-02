import React, { useState } from 'react';
import axios from 'axios';

import './Login.scss';

function Login() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const a = (callback, data, name, value) => {
    const key = name;
    const keyValue = value;
    callback({
      ...data,
      [key]: keyValue,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios.post('http://localhost:3000/api/login', { data }).then(response => {
      console.log('response', response);
    });
  };

  const handleChange = event => {
    const key = event.target.name;
    const value = event.target.value;

    a(setData, data, key, value);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <input
        placeholder="firstname"
        type="text"
        name="firstname"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="lastname"
        name="lastname"
        onChange={handleChange}
      /> */}

      <input
        type="email"
        placeholder="email"
        name="email"
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        onChange={handleChange}
      />
      {/* <input
        type="password"
        placeholder="repeat password"
        name="password2"
        onChange={handleChange}
      /> */}
      <button type="submit">Submit</button>
    </form>
  );
}

export default Login;
