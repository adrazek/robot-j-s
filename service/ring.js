var RingService = {
	create: function(data){
		var ringClass = require('../entities/ring').Ring;
		var ring = new ringClass();
		ring.setWidth(data.width);
		ring.setHeight(data.height);
		return ring;
	}
};

exports.RingService = RingService;
