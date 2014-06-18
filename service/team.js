TeamService = {
	create: function(data){
		var teamClass = require('../entities/team').Team;
		var team = new teamClass();
		team.setId(data.id);
		team.setName(data.name);
		return team;
	}
};

exports.TeamService = TeamService;
