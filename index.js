module.exports = {
	
	listener: null,
	ringService: null,
	robotService: null,

	/**
	 * Launch the tcp listener 
	 *
	 * @return {String}
	 **/
	listen: function(server) {
		listener = require('./listener')(server);
		return listener;
	},
	getRingService: function() {
		if (typeof ringService == 'undefined' || !ringService)
			ringService = require('./service/ring').RingService;
		return ringService;
	},
	getRobotService: function() {
		if (typeof robotService == 'undefined' || !robotService)
		{
			console.log('Robot service created');
			robotService = require('./service/robot').RobotService;
		}
		return robotService;
	}
};
