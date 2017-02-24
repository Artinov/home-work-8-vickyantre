function setText(selector, text) {
	/*
		`selector` is string with CSS-like selector
		`text` - is just string with text we want to change
	*/

	// Write your code here
	var element = document.querySelector(selector);
	element.innerText = text;
};




function setTextAll(selector, text) {
	// Write your code here
	var arrayElements = document.querySelectorAll(selector);
	arrayElements.forEach(function(element){
	element.innerText = text;
});

}



setTextAll("div .block a", "or was it ?");
setText("p", "wasn't that hard, yeah ?");
setText("p", "What`s up?");

