import { useState, useEffect } from 'react';
import uselocalStorageHook from './hooks/uselocalStorageHook';
import { Routes, Route } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';
import Header from "./components/Header";
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import Create from './components/Create';
import MyPets from './components/MyPets';
import Edit from './components/Edit';
import Details from './components/Details';
import Logout from './components/Logout/Logout';

const initialAuthState = {
_id: '',
email: '',
accessToken: '',
};

function App() {
  const [user, setUser] = uselocalStorageHook('user', initialAuthState);

  const login = (authData) => {
       setUser(authData);
  };

  const logout = () => {
    setUser(initialAuthState)
  };

  return (
    <AuthContext.Provider value={{user, login, logout}}>
      <div id="container">
        <Header />

        <main id="site-content">
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
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
