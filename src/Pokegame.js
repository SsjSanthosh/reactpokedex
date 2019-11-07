import React, { Component } from "react";
import "./Pokedex.css";
import Pokecard from "./Pokecard";
class Pokegame extends Component {
  static defaultProps = {
    pokemon: [
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
      { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
      { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
      { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
      { id: 133, name: "Eevee", type: "normal", base_experience: 65 }
    ]
  };
  render() {
    const returnRandom = () => {
      const pokemon = this.props.pokemon;
      const index = Math.floor(Math.random() * pokemon.length);
      const pop = pokemon[index];
      this.props.pokemon.splice(index, 1);
      return pop;
    };
    const hand1 = [];
    const hand2 = [];
    const makeHands = () => {
      const lim = this.props.pokemon.length / 2;
      for (let i = 0; i < lim; i++) {
        hand1.push(returnRandom());
        hand2.push(returnRandom());
      }
    };
    const totalExp = hand => {
      let total = 0;
      hand.forEach(el => {
        total += el.base_experience;
      });
      return total;
    };
    makeHands();
    const hand1xp = totalExp(hand1);
    const hand2xp = totalExp(hand2);
    let winner;
    if (hand1xp > hand2xp) {
      winner = "p1";
    } else {
      winner = "p2";
    }

    return (
      <div>
        <h1 className="Pokedex-title">POKEDEX!</h1>
        <h3 className={`Pokedex-title ${winner === "p1" ? "winner" : "loser"}`}>
          {winner === "p1" ? "Winning Hand" : "Losing Hand"}
        </h3>
        <h4 className="Pokedex-title">Total Experience : {hand1xp}</h4>
        <div className={`hand1 Pokedex-cards`}>
          {hand1.map(el => (
            <Pokecard
              id={el.id}
              type={el.type}
              xp={el.base_experience}
              name={el.name}
            />
          ))}
        </div>
        <h3 className={`Pokedex-title ${winner === "p2" ? "winner" : "loser"}`}>
          {winner === "p2" ? "Winning Hand" : "Losing Hand"}
        </h3>
        <h4 className="Pokedex-title">Total Experience : {hand1xp}</h4>
        <div className={`hand1 Pokedex-cards `}>
          {hand2.map(el => (
            <Pokecard
              id={el.id}
              type={el.type}
              xp={el.base_experience}
              name={el.name}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokegame;
