var robotlibz = require('Robot(J)s');

var RingService = {
	create: function(data){
		var ringClass = require('../entities/ring').Ring;
		var ring = new ringClass();
		ring.setName(data.name);
		ring.setWidth(data.width);
		ring.setHeight(data.height);
		return ring;
	},
	launch: function(ring, sockets){
		var executor = require('../util/ring-executor').RingExecutor;
		executor.setRing(ring);
		executor.setSockets(sockets);
		executor.execute(ring);
	}
};

exports.RingService = RingService;
