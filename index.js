module.exports = {
	
	listener: null,
	ringService: null,
	robotService: null,
	teamService: null,

	/**
	 * Launch the tcp listener 
	 *
	 * @return {String}
	 **/
	listen: function(server) {
		listener = require('./listener')(server);
		return listener;
	},
	getTeamService: function() {
		if (typeof teamService == 'undefined' || !teamService)
			teamService = require('./service/team').TeamService;
		return teamService;
	},
	getRingService: function() {
		if (typeof ringService == 'undefined' || !ringService)
			ringService = require('./service/ring').RingService;
		return ringService;
	},
	getRobotService: function() {
		if (typeof robotService == 'undefined' || !robotService)
			robotService = require('./service/robot').RobotService;
		return robotService;
	},
	BaseClient: require('./client/base'),
	RingExecutor: require('./util/ring-executor').RingExecutor,
};
