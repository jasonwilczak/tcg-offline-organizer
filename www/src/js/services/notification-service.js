/*global fetch*/
/*global Headers*/
/*global Request*/

class NotificationService {
  constructor() {
      this._handlers = {};
  }
  get EventTypes() {
      return {
          'GAME_SELECTED':'GAME_SELECTED'
      };
  }
  on(eventName,handler) {
        this._handlers[eventName] = handler; 
    }
  fire(eventName,packet) {
      console.log('EVENT FIRED:'+eventName+' Packet:'+packet);
      if(this._handlers[eventName]) {
          for(var handler in this._handlers[eventName]) 
          {
              if(typeof this._handlers[eventName][handler] === 'function') {
                  this._handlers[eventName][handler](packet);
              }
          }
          
      }
  }
  
}

export let notifications = new NotificationService();