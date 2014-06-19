var Team = function(){
	var entity = {
		id: null,
		name: '',
		//bots: {},

		getId: function(){return this.id;},
		setId: function(id){this.id=id;},

		getName: function(){return this.name;},
		setName: function(name){this.name=name;},

		//getBots: function(){return this.bots;},
		//addBot: function(bot){this.bots[bot.getName()] = bot;},
		//removeBot: function(bot){delete this.bots[bot.getName()];}
	}
	return entity;
}

exports.Team = Team;
