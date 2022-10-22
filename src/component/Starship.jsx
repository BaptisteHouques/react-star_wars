import {React, useState} from "react";
import { Link, useLocation } from "react-router-dom";

function Starship () {
    const location = useLocation();
    const starship = location.state;
    const [listPilotes, setListPilotes] = useState([])

    {starship.pilots.map(item => (
        fetch(item)
        .then(res => res.json())
        .then(json => {
            setListPilotes([...listPilotes, json])
        })
    ))}

    return <div>
        <h2>{starship.name}</h2>
        <p>Modele : {starship.model}</p>
        <p>Fabriquant : {starship.manufacturer}</p>
        {starship.pilots.length == 0 ?
            <p>Pilotes : Aucun</p>:
            <div>Pilotes: {listPilotes.map(element => (
                <Link to={"/personnage"} state={element}>{element.name}</Link>
            ))}</div>
        }
    </div>

}

export default Starship