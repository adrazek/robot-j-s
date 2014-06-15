var Robot = function(){
	var entity = {
	id: null,
	name: '',

	getId: function(){return id;},
	setId: function(robotId){id=robotId;},

	getName: function(){return this.name;},
	setName: function(robotName){this.name=robotName;},
	}
	return entity;
}

exports.Robot = Robot;
