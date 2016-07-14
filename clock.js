$(document).ready(function() {
	function displayTime() {
		var currentTime = new Date()
		var hours = currentTime.getHours()
		var minutes = currentTime.getMinutes()
		var seconds = currentTime.getSeconds()
		var msec = currentTime.getMilliseconds()
		var meridien = "AM"

		if(seconds < 10) {
			seconds = "0"+seconds
		}
		if(minutes < 10) {
			minutes = "0"+minutes
		}
		if (hours > 12) {
			hours = String(Number(hours)-12)
			meridien = "PM"
		}

		// Changes color of clock every other minute
		if (minutes%2 == 0) {
			document.getElementById("clock").style.color="red"
		}
		else {
			document.getElementById("clock").style.color="black"	
		}

		// Changes color of text every hour (not every 24, but every 12)
		colChoice = ["#046c0f", "#d864d6", "#825a48", "#2ab185", "#636972", "#046059", "#6952B5", "#31294B", "#773417",
		"#50443F", "#666118", "#26584D"]
		document.getElementById("clocktext").style.color = colChoice[hours-1]

		hourSpan = document.getElementById('hour')
		hourSpan.innerText = hours

		minSpan = document.getElementById('minutes')
		minSpan.innerText = minutes

		secSpan = document.getElementById('seconds')
		secSpan.innerText = seconds

		meriSpan = document.getElementById('meridien')
		meriSpan.innerText = meridien


		if (minutes%5 == 0 && seconds == 0) {
			var col1 = String(Math.floor(Math.random()*256))
			var col2 = String(Math.floor(Math.random()*256))
			var col3 = String(Math.floor(Math.random()*256))
			var newCol = "rgb("+col1+", "+col2+", "+col3+")"
			
			document.body.style.backgroundColor = newCol
		}
	}
	
	setInterval(displayTime,1000);
});











