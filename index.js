const btn = document.querySelector('.form-button');
const searchInput = document.querySelector('.form-input');

const array = [
	{ name: 'Ewgeni', age: 35 },
	{ name: 'Marina', age: 36 },
	{ name: 'Ivan', age: 9 },
	{ name: 'Daria', age: 6 },
];

btn.disabled = true;

searchInput.addEventListener('input', (e) => {
	btn.disabled = e.target.value.trim() === '';
});

btn.addEventListener('click', (e) => {
	e.preventDefault();
	if (isGoolge(searchInput.value)) {
		showAlertWithDelayAndFormLock('Yandex круче. Но это не точно', 3000);
	} else {
		showAlertWithDelayAndFormLock(
			'Ваш запрос: "' + searchInput.value + '"' +
			'\nПервый ( 0 ) элемент массива: name = ' + array[0]['name'],
			3000
		);
	}
	//searchInput.value = '';
});

const showAlertWithDelayAndFormLock = (message, delay) => {
	formLock();
	setTimeout(() => {
		alert(message);
		formUnlock();
	}, delay);
};

const formLock = () => {
	btn.disabled = true;
	searchInput.disabled = true;
};

const formUnlock = () => {
	btn.disabled = false;
	searchInput.disabled = false;
};

const superSum = (a, b) => (typeof (a + b) === 'number' ? a + b : NaN);

const generateNumericArray = (elementCount)=>{
	const numericArray = [];
	for (let index = 0; index < elementCount; index++) {
		numericArray[index] = Math.floor(Math.random() * 100);		
	}
	return numericArray;
}

const minMaxFinder = (array) =>{
	let min = array[0];
	let max = array[0];
	for (let index = 0; index < array.length; index++) {
		min = min > array[index] ? array[index] : min;
		max = max < array[index] ? array[index] : max;
	}
	console.log('Array:', array);
	console.log('min', min);
	console.log('max', max);
}

minMaxFinder(generateNumericArray(10));

const findMax = (array) => Math.max(...array);

const isGoolge = (query) => query.trim().toLowerCase() === 'google';