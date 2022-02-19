import {Routes, Route} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from "./components/Header";
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import Create from './components/Create';
import MyPets from './components/MyPets';
import Edit from './components/Edit';
import * as authService from './services/authService';

function App() {
  const [iserInfo, setUserInfo] = useState({isAuthenticated: false, username: ""})

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

  return (
    <div id="container">
    
    <Header />
    
        <main id="site-content">
<Routes>
<Route path='/' element={<Dashboard />} />
<Route path='/Login' element={<Login onLogin={onLogin} />} />
<Route path='/Register' element={<Register />} />
<Route path='/My-Pets' element={<MyPets />} />
<Route path='/Create' element={<Create />} />
<Route path='/Edit' element={<Edit />} />
</Routes>
        </main>

        <footer id="site-footer">
            <p>@PetMyPet</p>
        </footer>

    </div>
  );
}

export default App;
