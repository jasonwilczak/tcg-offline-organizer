/*global fetch*/
/*global Headers*/
/*global Request*/

class CardGamesService {
  constructor() {
  }
  getCardGames(onSuccess) {
    //onSuccess([{text:'game1',value:1},{text:'game2',value:2}]);
    const endpoint = 'https://xfenypgzb9.execute-api.us-east-1.amazonaws.com/Prod/api/cardGames';
    // const requestHeaders = new Headers();
    // //requestHeaders.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    // //requestHeaders.append('Access-Control-Allow-Origin', '*');
    
    // const initOptions = { method: 'GET',
    //               headers: requestHeaders,
    //               mode: 'cors',
    //               cache: 'default' };
    
    const myRequest = new Request(endpoint);//,initOptions);
    return fetch(myRequest)
        .then((response) => {
            return response.json();
        })
        .then((data)=>{
           const body = JSON.parse(data.body);
           const results = body.results;
            onSuccess(results);
        });
  }
}

export default CardGamesService;