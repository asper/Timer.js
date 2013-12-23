
var Timer = new Class({
	Implements: [Events, Options],
	options: {
		// Initial timer value (in seconds)
		start: 0,
		// Number of seconds to add on each iteration (a negative value will decrement the timer)
		step: 1,
		// Final timer value
		end: 30,
		onBeforeSetOptions: function(){},
		onAfterSetOptions: function(){},
		onBeforeStart: function(){},
		onAfterStart: function(){},
		onBeforeUpdate: function(){},
		onAfterUpdate: function(){},
		onBeforeStop: function(){},
		onAfterStop: function(){}
	},
	iterator: null,
	time: 0,
	initialize: function(options){
		var t = this;
		t.fireEvent('beforeSetOptions');
		t.setOptions(options);
		t.time = t.options.start.toInt();
		t.fireEvent('afterSetOptions');
		return t;
	},
	start: function(){
		var t = this,
			delay = Math.abs(t.options.step.toInt());
		t.fireEvent('beforeStart');
		t.iterator = t.iterate.periodical(1000*delay, t);
		t.fireEvent('afterStart');
		return t;
	},
	iterate: function(){
		var t = this,
			o = t.options,
			step = o.step.toInt(),
			end = o.end.toInt();
		t.fireEvent('beforeUpdate');
		t.time += step;
		if(
			(step > 0 && t.time >= end)
			|| (step < 0 && t.time <= end)
		){
			t.stop();
		}
		t.fireEvent('afterUpdate');
		return t;
	},
	stop: function(){
		var t = this;
		t.fireEvent('beforeStop');
		clearInterval(t.iterator);
		t.fireEvent('afterStop');
		return t;
	}
});
