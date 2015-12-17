'use strict';
var Dice = require('./dice').roller,
Character = require('./character').character,
Room = require('./rooms').room,
io = require('../server').io,
players = require('../server').players,
areas = require('../server').areas,

Skill = function() {

};

/*
* Passive Skills and Racials
*/
Skill.prototype.darkvision = function(r, s) {
	return {
		minLevel: 1,
		type: 'passive',
		maxTrain: 100,
		onMove: function(room) {

		},
		onBlind: function() {

		}
	}
};

/*
* Melee Skills
*/
Skill.prototype.bash = function(r, s) {
	var addWait = 2,
	msgToPlayer = '',
	msgToRoom = '',
	msgToTarget = '',
	minLevel = 1; 

	if (s.player.position === 'fighting') {
		s.emit('msg', {msg: 'BASH!', styleClass: 'skill bash'});
	} else {
		// Not advanced enough to use the skill
	}
};

module.exports.skill = new Skill();