/*global fetch*/
/*global Headers*/
/*global Request*/

class CardGamesService {
  constructor() {
  }
  getCardGames(onSuccess) {
    const endpoint = 'https://xfenypgzb9.execute-api.us-east-1.amazonaws.com/Prod/api/cardGames';
    
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
  getCards(cardGameCategoryId,onSuccess) {
      const endpoint = 'https://xfenypgzb9.execute-api.us-east-1.amazonaws.com/Prod/api/cards?categoryId='+cardGameCategoryId;
    
    const myRequest = new Request(endpoint);//,initOptions);
    return fetch(myRequest)
        .then((response) => {
            //console.log(response);
            return response.json();
        })
        .then((data)=>{
            //console.log(data);
           //const body = JSON.parse(data.body);
           //const results = body.results;
            onSuccess(data);
        });
  }
}

export default CardGamesService;