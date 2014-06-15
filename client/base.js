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
BaseClient.prototype.getSocket = function(){console.log('getting socket : ');console.log(this.socket);return this.socket;};

BaseClient.prototype.emitTcp = function(event, params, fn){this.getSocket().emit(event, params, fn);};
