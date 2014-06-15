var RingService = {
	create: function(data){
		var ring = require('../entities/ring').Ring;
		return new ring(data.width, data.height);
	}
};

exports.RingService = RingService;
