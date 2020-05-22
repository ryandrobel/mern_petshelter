import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';




const CreatePet = (props) => {

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skillOne, setSkillOne] = useState("")
    const [skillTwo, setSkillTwo] = useState("")
    const [skillThree, setSkillThree] = useState("")
    const [errors, setErrors] = useState({});

    const createNewPet = (e) => {
        e.preventDefault();
        const pets = { name, type, description, skillOne, skillTwo, skillThree };
        axios.post("http://localhost:8000/api/pets/new", pets)
            .then(res => {
                console.log(res);
                if (res.data.error) {

                    setErrors(res.data.error.errors);
                } else {

                    navigate("/");
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="container bg-mute p-4 border">
            <h3>Know a pet needing a new home?</h3>
            <div className="form-group m-4 p-4 bg-light rounded shadow-lg text-dark">
                <form onSubmit={createNewPet}>
                    
                    <lable className=""><h4>Name</h4></lable>
                    <input className="form-control-lg" type="text" onChange={e => setName(e.target.value)}></input> {errors.name ? <p className="bg text-red">{errors.name.message}</p> : ""}
                    <lable className="text-dark"><h4>Type</h4></lable>
                    <input className="form-control-lg" type="text" onChange={e => setType(e.target.value)}></input> {errors.type ? <p className="bg text-red">{errors.type.message}</p> : ""}
                    <lable className=""><h4>Description</h4></lable>
                    <textarea rows="7" columns="50" className="form-control" type="text" onChange={e => setDescription(e.target.value)} ></textarea>{errors.description ? <p className="text-red">{errors.description.message}</p> : ""}<br></br>
                    <h4 className="m-4 p-4">Skills (Optional)</h4>
                    
                    <input className="form-control-lg" type="text" onChange={e => setSkillOne(e.target.value)} value={skillOne}></input> 
                    
                    <input className="form-control-lg" type="text" onChange={e => setSkillTwo(e.target.value)} value={skillTwo}></input> 
                    
                    <input className="form-control-lg " type="text" onChange={e => setSkillThree(e.target.value)} value={skillThree}></input><br></br>
                    <input className="btn btn-info shadow m-4 " type="submit" value="Add A Pet"></input>
                </form>
            </div>
        </div>

    );
};

export default CreatePet;