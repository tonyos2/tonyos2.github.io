function changeFontSize(size) {
	var t = document.getElementById("T");
	var allSummary = document.querySelectorAll('summary');
	
	switch (size) {
		case "small":
			t.style.fontSize = "12px";
			allSummary.forEach(function(summary) {
				summary.style.fontSize = "24px";
			});
			break;

		case "large":
			t.style.fontSize = "24px";
			allSummary.forEach(function(summary) {
				summary.style.fontSize = "36px";
			});
			break;
		
		default:
			t.style.fontSize = "18px";
			allSummary.forEach(function(summary) {
				summary.style.fontSize = "30px";
			});
	}
}

function changeTheme(color) {
	var t = document.getElementById("T");
	const hrList = document.querySelectorAll('hr');
	
	switch (color) {
		case "night":
			t.style.backgroundColor = "black";
			t.style.backgroundImage = "";
			t.style.color = "white";
			hrList.forEach(hr => {
				hr.style.borderColor = 'yellow';
			});
			break;
			
		case "gradient":
			t.style.backgroundImage = "linear-gradient(#24415f, #6f9bc7)";
			t.style.color = "white";
			hrList.forEach(hr => {
				hr.style.borderColor = 'white';
			});
			break;	

		default:
			t.style.backgroundColor = "white";
			t.style.backgroundImage = "";
			t.style.color = "black";
			hrList.forEach(hr => {
				hr.style.borderColor = 'black';
			});
	}
}