import React, { Component } from 'react'
import axios from 'axios'
import './freeWeek.css'

export default class FreeWeek extends Component {
    constructor(props) {
        super(props)
        this.state = {
            champions: [],
            freeWeekChampions: []
        }
    }

    async loadChampions() {
        const url = 'http://ddragon.leagueoflegends.com/cdn/10.19.1/data/pt_BR/champion.json'
        const url2 = 'https://br1.api.riotgames.com/lol/platform/v3/champion-rotations'

        await axios.get(url)
            .then(res => {
                const champions = Object.values(res.data.data);
                this.setState({ champions: champions })
            })

        await axios.get(url2)
            .then(res => {
                let xunda = Object.values(res.data)
                let ids = xunda.map(e => {
                    return parseInt(e)
                })
                let champ = this.state.champions
                for (let i = 0; i < champ.length; i++) {
                    champ[i].key = parseInt(champ[i].key)
                    if (ids.includes(champ[i].key)) {
                        this.state.freeWeekChampions.push(champ[i])
                    }
                }

            })
        

    }

    componentDidMount() {
        this.loadChampions()
    }
    render() {
        return (
            <div className="freeWeek">
                {this.state.freeWeekChampions[14] !== undefined &&
                <ul>
                    {this.state.freeWeekChampions.map((champ) => {
                        return (
                            <li key={champ.key}>
                                <a href="/#" onClick={(e) => this.selectChampion(e, champ.key)}>
                                    <img src={`http://ddragon.leagueoflegends.com/cdn/10.19.1/img/champion/${champ.image.full}`}
                                        alt={champ.name} />
                                </a>
                                {champ.name}
                            </li>
                        )
                    })}
                </ul>
                }
            </div>
        )
    }
}
