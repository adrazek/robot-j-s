var Ring = function(ringWidth, ringHeight){
	var id;
	var width=ringWidth;
	var height=ringHeight;
	var bots = new Array;

	var getId = function(){return id;};
	var setId = function(ringId){id=ringId;};

	var getWidth = function(){return width;};
	var setWidth = function(ringWidth){width=ringWidth;};

	var getHeight = function(){return width;};
	var setHeight = function(ringHeight){width=ringHeight;};

	var getBots = function(){return bots;}
	var addBot = function(bot){
		bots.push(bot);
	}

	return {
		getId: getId,
		setId: setId,
		getWidth: getWidth,
		setWidth: setWidth,
		getHeight: getHeight,
		setHeight: setHeight,
		getBots: getBots,
		addBot: addBot,
	};
}

exports.Ring = Ring;
