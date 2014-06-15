var Robot = {
	id: null,
	name: '',

	getId: function(){return id;},
	setId: function(robotId){id=robotId;},

	getName: function(){return this.name;},
	setName: function(robotName){this.name=robotName;},

	fromJSON: function(data){
		this.id=data.id;
		this.name=data.name;
	}
}

exports.Robot = Robot;
