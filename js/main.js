(() => {
	// collect the buttons at the bottom of the page
	let theThumbnails = document.querySelectorAll("#buttonHolder img"),
			gameBoard = document.querySelector(".puzzle-board");

	// theThumbnails collects all the image elements in a container

	function changeBgImg() {
		// debugger;
		gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)`
	}

	// add event handling here
	theThumbnails.forEach(item => item.addEventListener("click", changeBgImg));

})();
