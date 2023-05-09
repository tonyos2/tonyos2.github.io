function toggleTable() {
	var table1 = document.getElementById("table1");
	var table2 = document.getElementById("table2");
	var table3 = document.getElementById("table3");
	
	var title = document.getElementById("table-title");

	if (table1.style.display === "table") {
		table1.style.display = "none";
		table2.style.display = "table";
		table3.style.display = "none";
		title.innerHTML = "Other Beginner Projects";
	} else if (table2.style.display === "table") {
		table1.style.display = "none";
		table2.style.display = "none";
		table3.style.display = "table";
		title.innerHTML = "Some Intermediate Projects";
	} else {
		table1.style.display = "table";
		table2.style.display = "none";
		table3.style.display = "none";
		title.innerHTML = "Intro to Web Development";
	}
}


// Hide table2 on page load
window.onload = function() {
	var table1 = document.getElementById("table1");
	var table2 = document.getElementById("table2");
	var table3 = document.getElementById("table3");

	table1.style.display = "table";
	table2.style.display = "none";
	table3.style.display = "none";
};