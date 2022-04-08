(() => {
	// FIRST you collect your items in any given section
	let theThumbnails = document.querySelectorAll("#buttonHolder img"),
			gameBoard = document.querySelector(".puzzle-board"),
			puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
			dropZones = document.querySelectorAll(".drop-zone");

	// const is a variable whose value can't change - it's immutable.
	// use this to assign bits of data that will be constant for the
	// entire lifecycle of your app
	// puzzlePaths refer to half the img src that we need to build -
	// need to append an index to them
	const puzzlePaths = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

	// THIRD you write your function
	function changeImgSet() {

		// "this" refers to the element that triggers this function
		// ie. the nav button we click with the custom data attribute of bgref
		// use "debugger;" to check your work
		gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)`;

		// loop through all the small draggable images and change their src attributes
		puzzlePaths.forEach((img, index) => {
			puzzlePieces[index].src = `images/${img + this.dataset.bgref}.jpg`;
		});
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

		if (this.childElementCount == 1) {return; }
		console.log("there's no space here!")
		// retrieve the data we got on the drag
		let droppedEl = event.dataTransfer.getData("currentItem");
		console.log(droppedEl);
		// move dragged element into the current drop zone
		// appendChild adds an element to another as a child
		this.appendChild(document.querySelector(`#${droppedEl}`));
	}

	// SECOND you add your event handling here
	theThumbnails.forEach(item => item.addEventListener("click", changeImgSet));

	puzzlePieces.forEach(piece => piece.addEventListener("dragstart", dragStarted));

	dropZones.forEach(zone => {
		zone.addEventListener("dragover", allowDragOver);
		zone.addEventListener("drop", allowDrop);
		});

})();
