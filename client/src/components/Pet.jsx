import React from 'react';
import { Link } from "@reach/router";


const Pet = (props) => {



    return (
        
        <div className="card text-dark bg-light m-4 p-4 shadow-lg border ">
            <h4 className="m-4"><u>Name: {props.pet.name}</u></h4>
            <h4><u>Type</u></h4>
            <p>{props.pet.type}</p>
            <h4><u>Description</u></h4>
            <p>{props.pet.description}</p>
            <h4><u>Skills</u></h4>
            <p>{props.pet.skillOne}</p>
            <p>{props.pet.skillTwo}</p>
            <p>{props.pet.skillThree}</p>
            <Link className="btn btn-info m-2 shadow" to={"/update/" + props.pet._id} >Edit</Link>
            <Link className="btn btn-warning m-2 shadow" to={"/" + props.pet._id}>Details</Link>
        </div>
        

    );

}

export default Pet;