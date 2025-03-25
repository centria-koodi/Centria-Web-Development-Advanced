import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ReadDeleteUsers() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/users');
      setUsers(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUsers();
    const interval = setInterval(fetchUsers, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      fetchUsers(); // Päivitä käyttäjälista poiston jälkeen
    } catch (err) {
      console.error(err);
      alert('Failed to delete user');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Users</h2>
      <ul className="list-group">
        {users.map((user) => (
          <li key={user.id} className="list-group-item d-flex justify-content-between align-items-center">
            {user.id}. {user.name} - {user.email}
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(user.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReadDeleteUsers;