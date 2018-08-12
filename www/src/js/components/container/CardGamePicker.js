import React, { Component } from "react";
import ReactDOM from "react-dom";
import Select from "../presentational/Select";
import CardGamesService from "../../services/card-games-service";
class CardGamePicker extends Component {
  constructor() {
    super();
    this.state = {
      selectedCardGame: {title:''},
      cardGameOptions: []
    };
    this.handleChange = this.handleChange.bind(this);
    var service = new CardGamesService();
    service.getCardGames((data)=>{
      this.setState({cardGameOptions: data.map((i)=>{return {text:i.displayName,value:i.categoryId};})});
    });
  }
  handleChange(event) {
    this.setState({selectedCardGame: {title:event.target.value }});
    console.log(event);
    console.log(event.target.value);
  }
  render() {
    const { selectedCardGame, cardGameOptions } = this.state;
    return (
      <div>
        <Select
          text="Card Game"
          label="select-card_game"
          id="picker-card_game"
          //value={selectedCardGame}
          handleChange={this.handleChange}
          options={cardGameOptions}
        />
        <h2>{selectedCardGame.title}</h2>
      </div>
    );
  }
}
export default CardGamePicker;

const wrapper = document.getElementById("card-game-picker");
wrapper ? ReactDOM.render(<CardGamePicker />, wrapper) : false;