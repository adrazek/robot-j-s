var events = require('events');

module.exports = BaseClient;

function BaseClient(){
	        events.EventEmitter.call(this);
}

BaseClient.super_ = events.EventEmitter;
BaseClient.prototype = Object.create(events.EventEmitter.prototype, {
	constructor: {
		value: BaseClient,
		enumerable: false,
	}
});

BaseClient.prototype.socket = null;

BaseClient.prototype.setSocket = function(socket){this.socket=socket;console.log('setting socket');};
BaseClient.prototype.getSocket = function(){return this.socket;};

BaseClient.prototype.emitTcp = function(event, params, fn){this.socket.emit(event, params, fn);};
