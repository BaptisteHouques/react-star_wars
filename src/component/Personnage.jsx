import {React, useState} from "react";
import { Link, useLocation } from "react-router-dom";

function Personnage () {
    const location = useLocation();
    const personnage = location.state;
    const [listStarships, setListStarships] = useState([])

    {personnage.starships.map(item => (
        fetch(item)
        .then(res => res.json())
        .then(json => {
            setListStarships([...listStarships, json])
        })
    ))}

    return <div>
        <h2>{personnage.name}</h2>
        <p>Couleur des yeux : {personnage.eye_color}</p>
        <p>Date de naissance : {personnage.birth_year}</p>
        <p>Genre : {personnage.gender}</p>
        {personnage.starships.length == 0 ?
            <p>Starships : Aucun</p>:
            <div>Starships: {listStarships.map(element => (
                <Link to={"/starship"} state={element}>{element.name}</Link>
            ))}</div>
        }
        <p>Date de création : {personnage.created}</p>
        <p>Date d'édition : {personnage.edited}</p>
    </div>
}

export default Personnage