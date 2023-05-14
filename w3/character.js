function addComment() {
	var name = document.getElementById("name").value.trim();
	var comment = document.getElementById("comment").value.trim();
	var comments = document.getElementById("comments");

	if (name === '' || comment === '') {
		alert('Please enter both name and comment.');
		return;
	}

	var newComment = document.createElement("div");
	var commentName = document.createElement("h4");
	var commentText = document.createElement("p");

	commentName.innerHTML = name;
	commentText.innerHTML = comment;

	newComment.appendChild(commentName);
	newComment.appendChild(commentText);

	comments.appendChild(newComment);

	document.getElementById("name").value = '';
	document.getElementById("comment").value = '';
}