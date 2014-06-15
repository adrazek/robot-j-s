var RobotService = {
	create: function(data){
		var robot = require('../entities/robot').Robot;
		robot.setName(data.name);
		return robot;
	}
};

exports.RobotService = RobotService;
