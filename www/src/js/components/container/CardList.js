import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactTable from "react-table";
import 'react-table/react-table.css';
import CardGamesService from "../../services/card-games-service";
class CardList extends Component {
  constructor() {
    super();
    this.state = {
      cards: []
    };
    var service = new CardGamesService();
    service.getCards(24,(data)=>{
      this.setState({cards: data});
    });
  }
  render() {
    const { cards } = this.state;
    const data = [{
      name: 'Tanner Linsley',
      age: 26,
      friend: {
          name: 'Jason Maurer',
          age: 23,
      }
    }];

    const columns = [{
        Header: 'Name',
        accessor: 'name' // String-based value accessors!
      }, {
        Header: 'Age',
        accessor: 'age',
        Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
      }, {
        id: 'friendName', // Required because our accessor is not a string
        Header: 'Friend Name',
        accessor: d => d.friend.name // Custom value accessors!
      }, {
        Header: props => <span>Friend Age</span>, // Custom header components!
        accessor: 'friend.age'
    }];
  
    return (
      <div>
        <ReactTable
          data={data}
          columns={columns}
        />
      </div>
    );
  }
}
export default CardList;

const wrapper = document.getElementById("card-list");
wrapper ? ReactDOM.render(<CardList />, wrapper) : false;