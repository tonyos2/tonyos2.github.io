function simplify() {
	var set = document.getElementsByClassName("child");
	set[0].innerHTML = "Choose your coffee beans";
	set[1].innerHTML = "Choose your coffee maker";
	set[2].innerHTML = "Choose your coffee amount";
	set[3].innerHTML = "Fill pot/kettle with water";
	set[4].innerHTML = "Set your water to boil";
	set[5].innerHTML = "Prepare the coffee maker";
	set[6].innerHTML = "Pour the water";
	set[7].innerHTML = "Brew coffee / wait";
	set[8].innerHTML = "Remove used filters";
	set[9].innerHTML = "Separate plunger from press";
	set[10].innerHTML = "Pour coffee into mug / cup";
	set[11].innerHTML = "Adding flavorings / sweeteners";
	set[12].innerHTML = "Stir and blend coffee";
	set[13].innerHTML = "Taste coffee, adjust if needed";
	set[14].innerHTML = "Enjoy your coffee!";
	set[15].innerHTML = "Store leftovers";
	set[16].innerHTML = "Clean any equipment";
	set[17].innerHTML = "Experiment some more";
	set[18].innerHTML = "Consider investments";
	set[19].innerHTML = "Optional: get tips / advice";
}

function convertList() {
	var parents = document.querySelectorAll(".parent");

	parents.forEach(function(pt) {
		pt.style.display = "inline";
	});
	
	var children = document.querySelectorAll(".child");

	children.forEach(function(ch) {
		ch.style.backgroundColor = "transparent";
		ch.style.borderStyle = "none";
		ch.style.width = "100%";
		ch.style.marginLeft = "5%";
	});
}