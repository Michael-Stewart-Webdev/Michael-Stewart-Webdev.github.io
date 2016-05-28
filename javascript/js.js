window.onload = function() {
	var screen_open = false;	
	var screen_num  = -1;
	var items = document.getElementsByClassName("portfolio-item");
	var pItems = document.getElementById("portfolio-items");
	var infos = document.getElementsByClassName("portfolio-item-info");
	var screen = document.getElementById("portfolio-item-screen");
	var prev_item = document.getElementById("prev-item");
	var next_item = document.getElementById("next-item");
	var total_screens = infos.length;
	var close_window_buttons = document.getElementsByClassName("close-window");
	//var bounceTimeout;




	// Checks whether the user has opened the first or last slide.
	// If they have, hide the arrow. If not, show it.
	var checkEnd = function() {
		if (screen_num == 1)
			prev_item.classList.add("end");
		else
			prev_item.classList.remove("end");

		if (screen_num == total_screens)
			next_item.classList.add("end");
		else
			next_item.classList.remove("end");	
	}

	function showItem(ele) {

		var index = Array.prototype.indexOf.call(pItems.children, ele) + 1;

		clearItem();		
		//var info = "info-" + index;
		screen_num = index;
		screen.classList.add("show");		
		checkEnd();

		//window.clearTimeout(bounceTimeout);
		//screen.classList.remove("bounce");


		
		infos[index - 1].classList.add("show");	
		screen.classList.add("bounce");	
		document.getElementsByTagName("main")[0].classList.add("blur");
		document.getElementsByTagName("footer")[0].classList.add("blur");
		
		setTimeout(function() {
			screen_open = true;
		}, 1);
		/*bounceTimeout = window.setTimeout(function() {
			screen.classList.remove("bounce");
		}, 250);*/
	}

	
	var clearItem = function() {
		if(screen_open == true) {
			screen.classList.remove("show");
			for(var i=0; i < infos.length; i++) {
				infos[i].classList.remove("show");
			}
			document.getElementsByTagName("main")[0].classList.remove("blur");
			document.getElementsByTagName("footer")[0].classList.remove("blur");		
			screen_open = false;
			screen_open_id = null;
		}
	}
	
	function prevItem() {
		if (screen_num > 1)
			showItem(items[screen_num - 2]);
	}
	
	function nextItem() {		
		if (screen_num < total_screens)
			showItem(items[screen_num]);	
	}
	
	
	for(var i=0; i < items.length; i++) {
		items[i].onclick = function() { showItem(this); };
	}

	for(var i=0; i < close_window_buttons.length; i++) {
		close_window_buttons[i].onclick = function() { clearItem(); };
	}	
	
	document.getElementsByTagName("main")[0].addEventListener('click', clearItem, false);
	document.getElementsByTagName("nav")[0].addEventListener('click', clearItem, false);
	document.getElementsByTagName("footer")[0].addEventListener('click', clearItem, false);
	document.getElementById("prev-item").addEventListener('click', prevItem, false);
	document.getElementById("next-item").addEventListener('click', nextItem, false);
	document.onkeydown = checkKey;
	function checkKey(e) {
		e = e || window.event;
		if (e.keyCode == 37) {
			if(screen_open == true)
				prevItem();
		} else if (e.keyCode == 39) {
			if(screen_open == true)
				nextItem();
		}
		
	}

	var miniShots = document.getElementsByClassName("mini-shots");	

	function swapItem(element, parentFigure) {
		console.log(element, parentFigure);
		eleSrc = element.style.backgroundImage;
		figSrc = parentFigure.style.backgroundImage;
		element.style.backgroundImage = figSrc;
		parentFigure.style.backgroundImage = eleSrc;
	}

	// Mini screenshots
	for(var i=0; i < miniShots.length; i++) {
		//items[i].addEventListener('click', showItem, false);
		var miniShotItems = miniShots[i].childNodes
		var parentFigure = miniShots[i].parentNode.getElementsByTagName("figure")[0];
		for(var j = 0; j < miniShotItems.length; j++) {
			miniShotItems[j].onclick = function() { swapItem(this, parentFigure); };
		}
	}

}