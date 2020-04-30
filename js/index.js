const inc = document.querySelector('.increment');
const dec = document.querySelector('.decrement');
const reset = document.querySelector('.reset');
const value = document.querySelector('.count');
var count = 0;

inc.addEventListener('click', () => {
	// var t = e.target;
	count += 1;
	value.innerHTML = count;
	increment();
	store();
	console.log(count);
});

dec.addEventListener('click', () => {
	var n = localStorage.getItem('count');
	if (n > 0) {
		n -= 1;
		localStorage.setItem('count', n);
	} else {
		value.innerHTML = count = 0;
	}
	document.getElementById('result').innerHTML = n;

	// decrement();
	store();
});

reset.addEventListener('click', () => {
	value.innerHTML = count = 0;
	resetCounter();
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

// function store() {
// 	window.localStorage.mycounter = value.innerHTML;
// }

function increment() {
	var n = localStorage.getItem('count');
	if (n === 'null') {
		n = n;
	}
	n++;
	localStorage.setItem('count', n);

	document.getElementById('result').innerHTML = n;
	console.log(n);
}

function decrement() {}
function resetCounter() {
	var n = localStorage.getItem('count');
	if (n === 1) {
		n = 0;
	}
	n = 0;
	localStorage.setItem('count', n);

	document.getElementById('result').innerHTML = n;
}
