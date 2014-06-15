var Robot = function(){
	var entity = {
		id: null,
		name: '',

		getId: function(){return this.id;},
		setId: function(id){this.id=id;},

		getName: function(){return this.name;},
		setName: function(name){this.name=name;},
	}
	return entity;
}

exports.Robot = Robot;
