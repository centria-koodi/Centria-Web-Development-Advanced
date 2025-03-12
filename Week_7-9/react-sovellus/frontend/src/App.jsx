import React, { useState } from 'react';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';
import ReadDeleteUsers from './components/ReadDeleteUsers';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [usersUpdated, setUsersUpdated] = useState(false);

  const handleUserAdded = () => {
    setUsersUpdated(!usersUpdated);  // Varmistetaan, että käyttäjälista päivittyy
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="my-5 text-center">React - App</h1>
        <CreateUser />
        <UpdateUser />
        <ReadDeleteUsers />
      </div>
    </div>
  );
}
export default App;
