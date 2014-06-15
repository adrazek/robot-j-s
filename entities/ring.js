var colors = require('colors');

var Ring = function(){

	var entity = {
		id: null,
		name: '',
		width: null,
		height: null,
		bots: {},

		getId: function(){return id;},
		setId: function(id){this.id=id;},

		getName: function(){return this.name;},
		setName: function(name){this.name=name;},

		getWidth: function(){return this.width;},
		setWidth: function(width){this.width=width;},

		getHeight: function(){return this.height;},
		setHeight: function(height){this.height=height;},

		getBots: function(){return this.bots;},
		addBot: function(bot){
			this.bots[bot.getName()] = bot;
		},

		toString: function(){return this.name.yellow + ' {width: ' + this.width.toString().blue + ', height: ' + this.height.toString().blue + '}'}, 
	}

	return entity;
}

exports.Ring = Ring;
