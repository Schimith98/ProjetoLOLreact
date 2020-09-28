import React, { Component } from 'react'
import axios from 'axios'

export default class AllChampions extends Component {

    constructor(props) {
        super(props)
        this.state = {
            champions: []
        };
    }

    loadChampions() {
        let url = 'http://ddragon.leagueoflegends.com/cdn/10.19.1/data/pt_BR/champion.json'

        axios.get(url)
            .then(res => {
                const champions = Object.values(res.data.data);
                this.setState({ champions })
                console.log(champions)
            })
    }

    componentDidMount() {
        this.loadChampions()
    }
    render() {
        return (
            <div>
                <ul>
                    {/* {this.state.champions.map((champ) => {
                        return(
                            <li>
                                <strong> {champ.name} </strong>
                            </li>
                        )
                    } )} */}
                    all champions
                </ul>
            </div>
        )
    }
}