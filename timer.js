var schedule_normal = {
	"Math":[8,12],
	"Biology":[9,17],
	"TOK":[10,14],
	"HOA":[11,11],
	"Lunch":[12,11],
	"Literature":[12,41],
	"Psychology":[13,38],
	"Spanish":[14,34],
	"Home":[15,32]
};

var schedule_wed = {
	"Math":[8,12],
	"Biology":[9,12],
	"TOK":[10,04],
	"Homeroom":[10,56],
	"HOA":[11,31],
	"Lunch":[12,27],
	"Literature":[12,55],
	"Psychology":[13,47],
	"Spanish":[14,39],
	"Home":[15,32]
};

function leave_time() {
	var now = new Date();
	var sched;
	if (now.getDay() == 3) {
		sched = schedule_wed;
	} else {
		sched = schedule_normal;
	}
	for (var i in sched) {
		var leavetime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), sched[i][0], sched[i][1]);
		if (now < leavetime) {
			return [i, leavetime];
		}
	}
}

function get_timeleft() {
	var now = new Date();
	var leave = leave_time();

	var seconds_left = Math.round((leave[1]-now)/1000);
	var minutes_left = Math.floor(seconds_left/60);
	var seconds_left = seconds_left%60;

	return minutes_left + ":" + seconds_left;
}

// run every second
setInterval(function(){ 
	document.getElementById("timer").innerHTML = get_timeleft()
}, 1000);
