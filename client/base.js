var events = require('events');

module.exports = BaseClient;

function BaseClient(){
	        events.EventEmitter.call(this);
}

BaseClient.super_ = events.EventEmitter;
BaseClient.prototype = Object.create(events.EventEmitter.prototype, {
	constructor: {
		value: BaseClient,
		enumerable: false
							        }
});

BaseClient.prototype.emitTcp = function(event, params, fn){BaseClient.prototype.getSocket().emit(event, params, fn);};
