const inc = document.querySelector('.increment');
const dec = document.querySelector('.decrement');
const reset = document.querySelector('.reset');
const value = document.querySelector('.count');
var count = 0;
inc.addEventListener('click', () => {
	// var t = e.target;
	count += 1;
	value.innerHTML = count;
	store();
	console.log(count);
});

dec.addEventListener('click', () => {
	if (count > 0) {
		count -= 1;
		value.innerHTML = count;
		} else {
			value.innerHTML = count = 0;
	}
	store();
});

reset.addEventListener('click', () => {
	value.innerHTML = count = 0;
	store();
});

function store() {
	window.localStorage.mycounter = value.innerHTML;
}

function getValue() {
	var storedValues = window.localStorage.mycounter;
	if (!storedValues) {
		value.innerHTML = '<h1>0</h1>';
	} else {
		value.innerHTML = storedValues;
	}
}
getValue();
