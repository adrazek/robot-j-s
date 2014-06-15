var colors = require('colors');

var Ring = function(){

	var entity = {
		id: null,
		width: null,
		height: null,
		bots: {},

		getId: function(){return id;},
		setId: function(id){this.id=id;},

		getWidth: function(){return this.width;},
		setWidth: function(width){this.width=width;console.log('width: ' + this.width)},

		getHeight: function(){return this.height;},
		setHeight: function(height){this.height=height;},

		getBots: function(){return this.bots;},
		addBot: function(bot){
			this.bots[bot.getName()] = bot;
		},

		toString: function(){return '{width: ' + this.width.toString().blue + ', height: ' + this.height.toString().blue + '}'}, 
	}

	return entity;
}

exports.Ring = Ring;
