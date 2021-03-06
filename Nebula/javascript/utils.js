﻿/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
/*												FPS														 */
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

// http://www.html5gamedevs.com/topic/1828-how-to-calculate-fps-in-plain-javascript/

var mode = "NONE"

var fps = {
	startTime : 0,
	frameNumber : 0,
	getFPS : function(){
		this.frameNumber++;
		var d = new Date().getTime(),
			currentTime = ( d - this.startTime ) / 1000,
			result = (this.frameNumber / currentTime).toFixed(1);

		if( currentTime > 1 ){
			this.startTime = new Date().getTime();
			this.frameNumber = 0;
		}
		return result;
	}	
};

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
/*											   Pause / Resume											 */
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */		

function nekSecond() {
	seconds_passed++;
	second_ticker = new Timer(nekSecond, 1000);
}

var gamePaused = false; 






window.onfocus = function () { 
	if(mode == "GAME") {
		if(gamePaused == true) {
			gameTicker = requestAnimationFrame(gameLoop);
			audio.play();
			
			if(levelHasStarted) {
				second_ticker.resume();
				for(var i = 0; i < SpawnHandler.spawnTimers.length; i++) { SpawnHandler.spawnTimers[i].resume(); }
				for(var i = 0; i < EventHandler.eventTimers.length; i++) { EventHandler.eventTimers[i].resume(); }
				for(var i = 0; i < EventHandler.eventEndTimers.length; i++) { EventHandler.eventEndTimers[i].resume(); }
			}
			//for(var i = 0; i < player.timers.length; i++) { player.timers[i].resume(); }
			if(Camera.shakeTimer) {  Camera.shakeTimer.resume(); }
			if(Player.specialRegenTimer) {  Player.specialRegenTimer.resume(); }
			if(Player.powerupTimer) {  Player.powerupTimer.resume(); }
			if(Player.pickupMessageRemovalTimer) {  Player.pickupMessageRemovalTimer.resume(); }
			if(Player.endGameTimer) {  Player.endGameTimer.resume(); }

			// For any object that is part of the timerObjects array, pause/resume their timers
			for(var i = 0; i < timerObjects.length; i++) { 
				for(var j = 0; j < timerObjects[i].timers.length; j++) {
					timerObjects[i].timers[j].resume();
				}			
			}

			gamePaused = false;
		} 
	}
}; 

window.onblur = function () { 
	if(mode == "GAME") {
		window.cancelAnimationFrame(gameTicker);
		audio.pause();
	
			
		if(levelHasStarted) {
			second_ticker.pause();
			for(var i = 0; i < SpawnHandler.spawnTimers.length; i++) { SpawnHandler.spawnTimers[i].pause(); }
			for(var i = 0; i < EventHandler.eventTimers.length; i++) { EventHandler.eventTimers[i].pause(); }
			for(var i = 0; i < EventHandler.eventEndTimers.length; i++) { EventHandler.eventEndTimers[i].pause(); }
		}
		//for(var i = 0; i < player.timers.length; i++) { player.timers[i].pause(); }
		if(Camera.shakeTimer) { Camera.shakeTimer.pause(); }
		if(Player.specialRegenTimer) {  Player.specialRegenTimer.pause(); }
		if(Player.powerupTimer) {  Player.powerupTimer.pause(); }
		if(Player.pickupMessageRemovalTimer) {  Player.pickupMessageRemovalTimer.pause(); }
		if(Player.endGameTimer) {  Player.endGameTimer.pause(); }

		// For any object that is part of the timerObjects array, pause/resume their timers
		for(var i = 0; i < timerObjects.length; i++) { 
			for(var j = 0; j < timerObjects[i].timers.length; j++) {
				timerObjects[i].timers[j].pause();
			}			
		}

		gamePaused = true;	

		drawPause = function() {
			if(gamePaused) {
				ctx_overlay.globalAlpha = 0.9;
				ctx_overlay.fillStyle = "black";
				ctx_overlay.fillRect(0, 0, canvas.width * 4, canvas.height * 4);
				ctx_overlay.fillStyle = "white";
				ctx_overlay.globalAlpha = 1;
				ctx_overlay.font = "" + 80 + "px fixedsys";
				ctx_overlay.textAlign = "center"; 
				ctx_overlay.textBaseline = 'middle';
				ctx_overlay.fillText("GAME PAUSED", canvas.width/2 * 4, canvas.height/2 * 4 - 80); 							
			}
		}		
		drawPause();
	}
	
}; 

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
/*											Helper Functions											 */
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

function convertToMmSs(seconds) {	
	var m = "" + Math.floor(seconds / 60);
	var s = "" + seconds % 60;
	if(m < 10) m = "0" + m;
	if(s < 10) s = "0" + s;

	return "" + m + ":" + s;
}

function convertToMilliseconds(time) {
	//http://stackoverflow.com/questions/9640266/convert-hhmmss-string-to-seconds-only-in-javascript
	var a = time.split(':');
	var seconds = (+a[0]) * 60 + (+a[1]); 	
	return seconds * 1000;
}

function convertToSeconds(time) {
	return convertToMilliseconds(time) / 1000;
}

function convertDifficultyToString() {
	switch(difficulty) {
		case 1: return "Easy";
		case 2: return "Normal";
		case 3: return "Hard";
	}
	return "Error";
	
}

// Random (because js doesn't have a good one)
function random(min, max) {
	return Math.random() * (max - min) + min;
}


// Sorts objects by their depth (to draw them in the right order)
function sortObjectsByDepth() {
	objects = objects.sort(function(a, b) {return a.depth - b.depth}).reverse();
}





// A miscellaneous timer

function Timer(callback, delay) {
	var timerId, timerIdEnd, start, remaining = delay;

	this.cancel = function() {
		window.clearTimeout(timerId);
		//timers.splice(timers.indexOf(this), 1);	
	}

	this.pause = function() {
		window.clearTimeout(timerId);
		remaining -= new Date() - start;
	};
	
	this.resume = function() {
		start = new Date();
		window.clearTimeout(timerId);
		timerId	= window.setTimeout(callback, remaining);
	};

	this.getRemaining = function() {
		return remaining;
	}
	this.resume();
}


Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
}


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
/*													Debug					  							 */
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

Debug = {
	skipToTime: function(seconds) {
		function isInt(value) {
		  return !isNaN(value) && 
				 parseInt(Number(value)) == value && 
				 !isNaN(parseInt(value, 10));
		}
		if(!levelHasStarted) {
			LevelHandler.levelStart();
			player.y = canvas.height - 90;
			player.movingToStart = false;
			audio.play();
		}
		if(seconds.indexOf(':') !== -1)
			seconds = convertToSeconds(seconds);
		if (isInt(seconds)) {
			seconds = parseInt(seconds);
			seconds_passed = seconds;		
			// Cancel all the spawn and event timers, and rescan the JSON to set them up again
			for(var i = 0; i < SpawnHandler.spawnTimers.length; i++) SpawnHandler.spawnTimers[i].cancel();
			for(var i = 0; i < EventHandler.eventTimers.length; i++) EventHandler.eventTimers[i].cancel();
			for(var i = 0; i < EventHandler.eventEndTimers.length; i++) EventHandler.eventEndTimers[i].cancel();
			SpawnHandler.spawnTimers.length = 0;
			EventHandler.eventTimers.length = 0;
			EventHandler.eventEndTimers.length = 0;
			second_ticker.cancel();
			second_ticker = new Timer(nekSecond, 1000);
			EventHandler.clearAllEvents();
			LevelHandler.initLevel(1);	
			
			audio.currentTime = seconds;	// Skip the audio
		} else {
			console.log("Invalid time entered.");
		}
	},

	promptSkip: function() {
		if(DEBUG_MODE)
			var skip = prompt("What time to skip to (in seconds)?");
		if(skip) 
			this.skipToTime(skip);
	}
}

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
/*													Cookies					  							 */
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

// Code found here: http://www.w3schools.com/js/js_cookies.asp

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

