import React from 'react';
import CreateUser from './components/CreateUser';
import ReadDeleteUsers from './components/ReadDeleteUsers';
import UpdateUser from './components/UpdateUser';

function App() {
  return (
    <div className="App">
      <CreateUser />
      <ReadDeleteUsers />
      <UpdateUser />
    </div>
  );
}

export default App;