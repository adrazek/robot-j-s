var robotlibz = require('Robot(J)s');

var RingExecutor = {
	ring: null,
	sockets: {},
	bots: null,
	compass: robotlibz.Compass,

	execute: function(){

		/* building fight zone */
		this.ring.setArea(this.buildArea());

		/* Bots first position */
		this.firstPosition();

		/* listen to the bots */
		this.listen();

		this.display();

	},
	
	getRing: function(){return this.ring;},
	setRing: function(ring){this.ring=ring;},

	getSockets: function(){return this.sockets;},
	setSockets: function(sockets){this.sockets=sockets;},

	getBots: function(){
		if (this.bots === null){
			this.bots = {};
			for (var botName in this.sockets)
				this.bots[this.sockets[botName].socket.id] = this.sockets[botName].bot;
		}
		return this.bots;
	},

	buildArea: function(){
		var fightZone = [];
		var lineIndex = 0;
		var columnIndex = 0;

		while(columnIndex < this.ring.getWidth()){
		
			fightZone[columnIndex] = [];
		
			lineIndex=0;
		
			while(lineIndex < this.ring.getHeight()){
				fightZone[columnIndex][lineIndex] = {x: columnIndex, y: lineIndex, bot: null};
				lineIndex++;
			}
		
			columnIndex++;
		}
		return fightZone;
	},
	firstPosition: function(){
		var bot;
		var xPos = this.ring.getWidth()/10;
		var yPos = this.ring.getHeight()/10;
		var x=xPos, y=yPos;
		var botIndex = 0;
		for(var i in this.ring.getBots()){
			bot = this.ring.getBots()[i];
			var xNext = xPos + x*botIndex;
			var yNext = yPos + y*botIndex;
			this.ring.getArea()[xNext][yNext].bot = bot;
			this.ring.addBotCell(bot, 'east', xNext, yNext);
			botIndex++;
		}
	},
	display: function(){
		var map = [];
		var cell;
		for(var i in this.ring.getArea()){
			for (var j in this.ring.getArea()[i]){
				
				if (map[j] == undefined)
					map[j] = [];

				cell = this.ring.getArea()[i][j];
				
				if (cell.bot !== null)
					map[j][i] = 'B';
				else
					map [j][i] = '*';

			}
		}
		
		var dispMap = '';
		for(var i in map){
			for(var j in map[i]){
				dispMap += map[i][j];
			}
			dispMap += '\n';
		}
		console.log(dispMap);
	},
	listen: function(){
		var me = this;

		var bot;
		var socket;

		for(var i in this.ring.bots){
			bot = this.ring.bots[i];
			socket = this.sockets[bot.getName()].socket;
			socket.emit('command', {cmd: 'ring go'}, function(data){
			});
			socket.on('move', function(data, fn){
				bot = me.getBots()[this.id];
				me.ring.move(bot, data.direction, 1);
				result = me.manageBot(bot);
				fn(result);
			});
			socket.on('turn', function(data, fn){
				bot = me.getBots()[this.id];
				me.ring.turn(bot, data.direction);
				me.manageBot(bot);
				fn(result);
			});
		}
	},
	manageBot: function(bot){
		this.display();
		return {bot: bot};
	}
};

exports.RingExecutor = RingExecutor;
