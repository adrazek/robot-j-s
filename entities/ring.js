var colors = require('colors');
var compass = require('../util/compass');

var Ring = function(){

	var entity = {
		id: null,
		name: '',
		width: null,
		height: null,
		teamOner: null,
		bots: {},
		botCells: {},
		area: [],

		getId: function(){return id;},
		setId: function(id){this.id=id;},

		getName: function(){return this.name;},
		setName: function(name){this.name=name;},

		getWidth: function(){return this.width;},
		setWidth: function(width){this.width=width;},

		getHeight: function(){return this.height;},
		setHeight: function(height){this.height=height;},

		getTeamOwner: function(){return this.teamOwner;},
		setTeamOwner: function(team){this.teamOwner=team;},

		getBots: function(){return this.bots;},
		addBot: function(bot){
			this.bots[bot.getName()] = bot;
		},

		getBotCells: function(){return this.botCells;},
		addBotCell: function(bot, orientation, x, y){this.botCells[bot.getName()] = {bot: bot, cell: this.getArea()[x][y], orientation: orientation};},
		removeBotCell: function(bot){delete this.botCells[bot.getName()];},

		getArea: function(){return this.area;},
		setArea: function(area){this.area=area;},

		move: function(bot, direction, distance){
			var botCell = this.botCells[bot.getName()];
			var cell = botCell.cell;

			var coord = compass.nextCell(botCell);
			var nextCell = this.area[coord.x][coord.y];

			nextCell.bot = bot;
			nextCell.orientation = cell.orientation;
			cell.bot = null;
			cell.orientation = null;
			this.botCells[bot.getName()].cell = nextCell;
		},

		turn: function(bot, direction){
			var cell = this.botCells[bot.getName()];
			cell.orientation = compass.next(direction, cell.orientation);
			console.log("O> " + cell.orientation);
		},

		toString: function(){return '[' + this.name.yellow + '] {width: ' + this.width.toString().blue + ', height: ' + this.height.toString().blue + '}';}, 
	};

	return entity;
};

exports.Ring = Ring;
