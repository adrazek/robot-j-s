var Compass = {

	orientations: {north: 'north', east: 'east', south: 'south', west: 'west'},

	next: function(direction, orientation){
		var result = this.orientations.north;
		switch(orientation){
			case this.orientations.north:
				if (direction == 'right') result = this.orientations.east;
				else result = this.orientations.west;
				break;
			case this.orientations.east:
				if (direction == 'right') result = this.orientations.south;
				else result = this.orientations.north;
				break;
			case this.orientations.south:
				if (direction == 'right') result = this.orientations.west;
				else result = this.orientations.east;
				break;
			case this.orientations.west:
				if (direction == 'right') result = this.orientations.north;
				else result = this.orientations.south;
				break;
		}
		return result;
	},
	nextCell: function(botCell, direction){
		var x = botCell.cell.x, y = botCell.cell.y;
		switch(botCell.orientation){
		       	case this.orientations.north:
				if (direction == 'forward') y++;
				else y--;
		       		break;
			case this.orientations.east:
				if (direction == 'forward') x--;
				else x++;
				break;
			case this.orientations.south:
				if (direction == 'forward') y--;
				else y++;
				break;
			case this.orientations.west:
				if (direction == 'forward') x++;
				else x--;
				break;
		}
		return {x: x, y: y};
	},
};

//exports.Compass = Compass;
module.exports = Compass;
