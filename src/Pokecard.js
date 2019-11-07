import React, { Component } from "react";
import "./Pokecard.css";
class Pokecard extends Component {
  render() {
    let { id, name, type, xp } = this.props;
    id = String(id);

    if (id.length < 3) {
      if (id.length === 2) {
        id = "0" + id;
      } else {
        id = "00" + id;
      }
    }

    const img = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-name">{name}</h1>
        <div className="Pokecard-img">
          <img src={img} alt={name} class="" />
        </div>
        <h3 className="Pokecard-data">Type - {type}</h3>
        <h3 className="Pokecard-data">Exp - {xp}</h3>
      </div>
    );
  }
}

export default Pokecard;
