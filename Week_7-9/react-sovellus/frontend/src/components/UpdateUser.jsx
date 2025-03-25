import React, { useState } from 'react';
import axios from 'axios';

function UpdateUser() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/users/${id}`, { name, email });
      setId('');
      setName('');
      setEmail('');
      alert('User updated!');
    } catch (err) {
      console.error(err);
      alert('Failed to update user');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Update User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="id" className="form-label">User ID</label>
          <input
            type="text"
            className="form-control"
            id="id"
            placeholder="Enter user ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter new name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter new email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-warning">Update User</button>
      </form>
    </div>
  );
}

export default UpdateUser;