Timer.js
========

Mootools timing class

Usage
-----

```javascript
var timer = new Timer({
	// Start the timer at 30 seconds
	start: 30,
	// On each iteration add -1 to the time
	step: -1,
	// End the timer when it reaches 0
	end: 0,
	// Function to execute when the timer starts
	onBeforeStart: function(){
		alert('You have 30 seconds from now to do some stuff');
	},
	// Function to execute when the timer stops
	onAfterStop: function(){
		alert('Your 30 seconds are gone !');
	}
});
```
