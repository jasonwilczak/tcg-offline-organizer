import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactTable from "react-table";
import 'react-table/react-table.css';
import CardGamesService from "../../services/card-games-service";
import { notifications } from "../../services/notification-service";
class CardList extends Component {
  constructor() {
    super();
    this.state = {
      cards: []
    };
    var service = new CardGamesService();
    notifications.on(notifications.EventTypes.GAME_SELECTED,(eventData)=>{
       service.getCards(eventData,(data)=>{
        this.setState({cards: data.results});
      });
    });
   
  }
  render() {
    const { cards } = this.state;

    const columns = [{
        Header: 'Name',
        accessor: 'name' // String-based value accessors!
      }, {
        Header: 'Buy Me',
        accessor: 'url',
        Cell: row => (
          <a href={row.value}>Store</a>
          )
      }, {
        Header: 'Image',
        accessor: 'imageSource',
        Cell: row => (
          <img style={{height:'50%'}} src={row.value}/>
          )
      }
      
      ];
  
    return (
      <div>
        <ReactTable
          data={cards}
          columns={columns}
        />
      </div>
    );
  }
}
export default CardList;

const wrapper = document.getElementById("card-list");
wrapper ? ReactDOM.render(<CardList />, wrapper) : false;