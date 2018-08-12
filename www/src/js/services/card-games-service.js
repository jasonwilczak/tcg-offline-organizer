/*global fetch*/
/*global Headers*/
/*global Request*/

class CardGamesService {
  constructor() {
  }
  getCardGames(onSuccess) {
    onSuccess([{text:'game1',value:1},{text:'game2',value:2}]);
    // const myHeaders = new Headers();
    // myHeaders.append('Content-Type', 'application/json');
    // myHeaders.append('Access-Control-Allow-Origin','*');
    
    // const myInit = { method: 'GET',
    //               headers: myHeaders,
    //               mode: 'no-cors',
    //               cache: 'default' };
    
    // const myRequest = new Request('http://lambdafunction',myInit);
    // return fetch(myRequest).then(response => response.json()).then((data)=>onSuccess(data));
          //.then(json => console.log(json))
  }
}

export default CardGamesService;