(() => {
	// first you collect your items in any given section
	let theThumbnails = document.querySelectorAll("#buttonHolder img"),
			gameBoard = document.querySelector(".puzzle-board"),
			puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
			dropZones = document.querySelectorAll(".drop-zone");

	// third you write your function
	function changeBgImg() {
		// use "debugger;"" to check your work
		gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)`
	}

	function dragStarted(event) {
		console.log("started dragging a piece!");
		// use the setData method of the drag event to reference the current element
		event.dataTransfer.setData("currentItem", event.target.id);
	}

	function allowDragOver(event) {
		// this turns off default browser behaviour
		event.preventDefault();
		console.log("dragged over me!");
	}

	function allowDrop(event) {
		// this turns off default browser behaviour
		event.preventDefault();
		console.log("dropped on me!");
		// retrieve the data we got on the drag
		let droppedEl = event.dataTransfer.getData("currentItem");
		console.log(droppedEl);
		// move dragged element into the current drop zone
		// appendChild adds an element to another as a child
		this.appendChild(document.querySelector(`#${droppedEl}`));
	}

	// second you add your event handling here
	theThumbnails.forEach(item => item.addEventListener("click", changeBgImg));

	puzzlePieces.forEach(piece => piece.addEventListener("dragstart", dragStarted));

	dropZones.forEach(zone => {
		zone.addEventListener("dragover", allowDragOver);
		zone.addEventListener("drop", allowDrop);
		});

})();
