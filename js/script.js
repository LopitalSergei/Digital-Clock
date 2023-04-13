"use strict"

function calculateTime() {
	let date = new Date();

	let dayNum = date.getDay();
	let dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
	let monthNum = date.getMonth();
	let monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
	let hour = date.getHours();
	hour = hour < 10 ? '0' + hour : hour;
	let minute = date.getMinutes();
	minute = minute < 10 ? '0' + minute : minute;
	let day = date.getDate();

	document.getElementById("hour").innerHTML = hour;
	document.getElementById("minute").innerHTML = minute;
	document.getElementById("day-of-week").innerHTML = dayNames[dayNum];
	document.getElementById("day").innerHTML = day;
	document.getElementById("month").innerHTML = monthNames[monthNum];

}

calculateTime();