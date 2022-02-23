import { useEffect, useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import * as authService from './services/authService';
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
  const [userInfo, setUserInfo] = useState({isAuthenticated: false, username: ""})

  useEffect(() => {
    let user = authService.getUser();

    setUserInfo({
      isAuthenticated: Boolean(user),
      user,
    });
  
  }, []);

  const onLogin = (username) => {
    setUserInfo({
      isAuthenticated:true, 
      user: username,
    })
  }

const onLogout = () =>{
  setUserInfo({
isAuthenticated: false,
user: null,
  });
};

  return (
    <div id="container">
    
    <Header {...userInfo} />
    
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
  );
}

export default App;
