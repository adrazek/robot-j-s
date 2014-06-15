 RobotService = {
	create: function(data){
		var robotClass = require('../entities/robot').Robot;
		var robot = new robotClass();
		robot.setName(data.name);
		return robot;
	}
};

exports.RobotService = RobotService;
