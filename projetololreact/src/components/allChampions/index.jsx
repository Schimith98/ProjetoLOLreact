import React, { Component } from 'react'
import axios from 'axios'
import './allChampions.css'

export default class AllChampions extends Component {

    constructor(props) {
        super(props)
        this.state = {
            champions: [],
            selectedChampion: []
        };

        this.selectChampion = this.selectChampion.bind(this);
    }

    loadChampions() {
        let url = 'http://ddragon.leagueoflegends.com/cdn/10.19.1/data/pt_BR/champion.json'

        axios.get(url)
            .then(res => {
                const champions = Object.values(res.data.data);
                this.setState({ champions: champions })
                this.setState({ selectedChampion: champions[0] })
                console.log(this.state.selectedChampion.stats.hp)
            })
    }

    selectChampion(e, champKey) {
        e.preventDefault();
        const selectedChamp = this.state.champions.filter((p) => {
            return champKey === p.key
        })
        this.setState({ selectedChampion: selectedChamp[0] })
    }

    componentDidMount() {
        this.loadChampions()
    }

    render() {
        return (
            <div className="allChampions">
                {this.state.selectedChampion.stats !== undefined &&
                    <div className="championInfo">
                        <div>
                            {this.state.selectedChampion.name} {this.state.selectedChampion.title}.
                        <p>{this.state.selectedChampion.blurb}</p>
                        </div>
                        <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.state.selectedChampion.id}_0.jpg`}
                            alt={this.state.selectedChampion.name} />
                        <div>
                            {Object.entries(this.state.selectedChampion.stats).forEach(([chave, valor]) => {
                                return (
                                    <p>
                                        {`${chave} : ${valor}`}
                                    </p>
                                )
                            })}
                        </div>
                    </div>
                }
                <ul>
                    {this.state.champions.map((champ) => {
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
            </div>
        )
    }
}