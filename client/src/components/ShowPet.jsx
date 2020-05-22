import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import LikeButton from './LikeButton';





const ShowPet = (props) => {

    const [name, setTitle] = useState("");
    const [type, setPrice] = useState();
    const [description, setDescription] = useState("");
    const [skillOne, setSkillOne] = useState();
    const [skillTwo, setSkillTwo] = useState();
    const [skillThree, setSkillThree] = useState();
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${props._id}`)
            .then(res => {
                setTitle(res.data.pet.name);
                setPrice(res.data.pet.type);
                setDescription(res.data.pet.description);
                setSkillOne(res.data.pet.skill_one)
                setSkillTwo(res.data.pet.skill_two)
                setSkillThree(res.data.pet.skill_three)
                console.log(res);
            })
            .catch(err => console.log(err));

    }, []);


    const deletePet = (e) => {
        e.preventDefault();
        axios.delete(`http://localhost:8000/api/pets/delete/${props._id}`)
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
        <div className="Card text-dark bg-light rounded m-4 p-4 shadow-lg">
            <div>
            <h4><u>Name : {name}</u></h4>
            <h4>Type</h4>
            <p>{type}</p>
            <p>{description}</p>
            <h4>Description</h4>
            <h4 className="m-4">Skills</h4>
            <p>{skillOne}</p>
            <p>{skillTwo}</p>
            <p>{skillThree}</p>
            <button className="btn-lg btn-outline-dark text-danger m-4 p-4 shadow-lg" onClick={deletePet} value={name}>Adot {name}</button>
        </div>
        <div>
            <LikeButton />
        </div>
        </div>

            );
        }

export default ShowPet;