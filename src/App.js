import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthContext } from './contexts/authContext';
import Header from "./components/Header";
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import Create from './components/Create';
import MyPets from './components/MyPets';
import Edit from './components/Edit';
import Details from './components/Details';
import Logout from './components/Logout/Logout';

function App() {
  const [user, setUser] = useState({
    _id: '',
    email: '',
    accessToken: '',
  });

  const onLogin = (authData) => {
   setUser(authData);
  };

  const onLogout = () => {
  };

  return (
    <AuthContext.Provider value={true}>
      <div id="container">
        <Header log />

        <main id="site-content">
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login onLogin={onLogin} />} />
            <Route path='/logout' element={<Logout onLogout={onLogout} />} />
            <Route path='/register' element={<Register />} />
            <Route path='/my-pets' element={<MyPets />} />
            <Route path='/create' element={<Create />} />
            <Route path='/edit' element={<Edit />} />
            <Route path='/details/:petId' element={<Details />} />
          </Routes>
        </main>

        <footer id="site-footer">
          <p>@PetMyPet</p>
        </footer>

      </div>
    </AuthContext.Provider>
  );
}

export default App;
