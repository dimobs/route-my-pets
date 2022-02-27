import PetCard from "./PetCard";
import * as petService from '../../services/petService';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';


const Dashboard = () => {
    const [pets, setPets] = useState([]);
  
    useEffect(() => {
        petService.getAll() 
            .then(result =>{
                setPets(result);
        })
    },[]);

    return(
        <section id="dashboard-page" className="dashboard">
            <h1>Dashboard</h1>
            
            <ul className="other-pets-list">
           
            <li className="otherPet">
                <h3>Name: Milo</h3>
                <p>Type: dog</p>
                <p className="img"><img to="/images/dog.png" /></p>
                <Link className="button" to="" >Details</Link>
            </li>
          
                    {pets.map(x => <PetCard key={x._id} pet={x} />) }
            </ul>
            <p className="no-pets">No pets in database!</p>
        </section>
    )
}

export default Dashboard;