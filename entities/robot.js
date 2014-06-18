var Robot = function(){
	var entity = {
		id: null,
		name: '',
		teamOwner: '',

		getId: function(){return this.id;},
		setId: function(id){this.id=id;},

		getName: function(){return this.name;},
		setName: function(name){this.name=name;},

		getTeamOwner: function(){return this.teamOwner;},
		setTeamOwner: function(team){this.teamOwner=team;},

		toString: function(){return name + '[' + teamOwner.getName() + ']';}
	};
	return entity;
};

exports.Robot = Robot;
