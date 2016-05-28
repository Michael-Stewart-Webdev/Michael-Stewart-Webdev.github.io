/*
* A script to check how many characters are left in the post
* Found at http://stackoverflow.com/questions/2136647/character-countdown-like-on-twitter and modified slightly
*/

function charsRemaining(field_id, counter_id, max_chars)
{
	var field = document.getElementById(field_id);
	var counter = document.getElementById(counter_id);
	var current_chars = field.value.length;

	if (current_chars > max_chars)	{
		field.value = field.value.substring(0, max_chars);
	}	else
	{
		counter.innerHTML = 'You have ' + (max_chars - current_chars) + ' character(s) remaining.';
	}
}



/*
* The script to make the Twitter button work. Found at Twitter.com
*/

!function(d,s,id)
{
	var js,fjs=d.getElementsByTagName(s)[0];
	if(!d.getElementById(id))	{
		js=d.createElement(s);
		js.id=id;js.src="https://platform.twitter.com/widgets.js";
		fjs.parentNode.insertBefore(js,fjs);
	}
}
(document,"script","twitter-wjs");


/*
* Pops up a confirmation window when a user clicks on the 'delete post' button
*/

function confirmDelete()
{
	var response = confirm("Are you sure you want to delete this post forever?");
	if (response == true)	{
		// This would delete the post in the future
		window.location.replace("my_page.html");
		}	else	{
		// Nothing happens
		}
}
