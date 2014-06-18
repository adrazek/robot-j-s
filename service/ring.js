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
	launch: function(ring){
		var executor = require('../util/ring-executor').RingExecutor;
		executor.execute(ring);
	}
};

exports.RingService = RingService;
