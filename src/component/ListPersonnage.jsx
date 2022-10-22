import React from "react"
import {Link} from 'react-router-dom'

class ListPersonnage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listPersonnage: [],
            isLoaded: false
        }
        this.searchPersonnage = this.searchPersonnage.bind(this)
    }

    componentDidMount () {
        this.getPersonnage()
    }

    getPersonnage () {
        fetch("https://swapi.dev/api/people/")
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                personnage: json.results
            })
        })
    }

    searchPersonnage (e) {
        fetch("https://swapi.dev/api/people?search="+e.target.value)
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                personnage: json.results
            })
        })
    }

    render () {
        return <div>
            <h2>Liste des personnages</h2>
            <input type="text" placeholder="Rechercher" onChange={this.searchPersonnage} />
            {!this.state.isLoaded ?
                <div>Chargement des ressources...</div> :
                <div>
                    {this.state.personnage.map(item => (
                        <Link to={"/personnage"} state={item}>{item.name}</Link>
                    ))}
                </div>
            }
        </div>
    }

}
export default ListPersonnage