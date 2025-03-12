import React, { useState } from 'react';
import axios from 'axios';

function CreateUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/users', { name, email });
      setName('');
      setEmail('');
      alert('User created!');
    } catch (err) {
      console.error(err);
      alert('Failed to create user');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Create User</button>
      </form>
    </div>
  );
}

export default CreateUser;
