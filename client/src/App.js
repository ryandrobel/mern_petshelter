import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Link } from "@reach/router";
import './App.css';
import CreatePet from './components/CreatePet';
import AllPets from './components/AllPets';
import EditPet from './components/EditPet';
import ShowPet from './components/ShowPet';

function App() {
  return (
    <div className="App container p-4 bg-secondary text-light">
      <div>
        <h1>Pet Shelter</h1>
      </div>
      <nav>
        <Link to="/"><button className="btn shadow btn-outline-light m-4">Home</button></Link>
        <Link to="/new"><button className="btn shadow btn-outline-light m-4">Add A Pet To The Shelter</button></Link>
      </nav>
      <Router>
        <AllPets path="/" />
        <CreatePet path="/new" />
        <EditPet path="update/:_id" />
        <ShowPet path="/:_id" />
      </Router>
    </div>
  );
}

export default App;
