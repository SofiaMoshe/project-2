/***  The "Name" field: ***/
// Use the .focus() method on the <input type="text"> element for the "Name" field.

document.getElementById('name').focus();


/***  "Job Role" section: ***/
// Hide the "text field" with the id of "other-job-role" so it is not displayed when the form first loads.

document.getElementById("other-job-role").style.display = "none";

const jobRole = document.querySelector('select[id="title"]');

jobRole.addEventListener('change', e => {
	if (e.target.value === 'other') {
		document.getElementById('other-job-role').style.display = 'block';
	} else {
		document.getElementById('other-job-role').style.display = "none";
	}
});


/*** "T-Shirt Info" section: ***/

const design = document.getElementById("design");
const optionColor = color.children;

color.disabled = true;

design.addEventListener("change", (e) => {
	color.disabled = false;
	for (let i = 0; i < optionColor.length; i++) {
		const selectedTheme = e.target.value;
		const colorTheme = optionColor[i].getAttribute("data-theme");

		if (selectedTheme === colorTheme) {
			optionColor[i].hidden = false;
			optionColor[i].setAttribute("selected", true);

		} else {
			optionColor[i].hidden = true;
			optionColor[i].removeAttribute;

		}
	}
});

/***  Register for activities ***/

const activities = document.getElementById("activities");
const activitiesCost = document.getElementById('activities-cost');
let total = 0;

activities.addEventListener('change', e => {
	var cost = parseInt(e.target.getAttribute("data-cost"));

	const checked = e.target.checked;

	if (checked === true) {
		total += cost;
	} else {
		total -= cost;
	}
	activitiesCost.innerHTML = `Total: $${total}`;

})


// console.log(activities);

/***  Payment Info ***/

const payment = document.getElementById("payment");
const creditCard = document.getElementById('credit-card');
const payPal = document.getElementById('paypal');
const bitCoin = document.getElementById('bitcoin');

payPal.style.display = 'none';
bitCoin.style.display = 'none';

payment.children.item(1).setAttribute("selected", "select");

payment.addEventListener("change", (e) => {

	if (e.target.value === "paypal") {
		payPal.style.display = "block";
		bitCoin.style.display = "none";
		creditCard.style.display = "none";
	};

	if (e.target.value === "bitcoin") {
		bitCoin.style.display = "block";
		payPal.style.display = "none";
		creditCard.style.display = "none";
	};


	if (e.target.value === "credit-card") {
		payPal.style.display = "none";
		bitCoin.style.display = "none";
		creditCard.style.display = "block";
	}

});


/***  Form Validation ***/

const conferenceForm = document.querySelector("form");
const emailAddress = document.getElementById("email");
const activitiesElement = document.getElementById("activities");
const totalElement = document.getElementById("activities-cost");
const userName = document.getElementById("name");

// Helper function for Username
function validNameCheck() {
	const nameValue = userName.value;
	const userNameRegex = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameValue);
	if (userNameRegex) {
		validationPass(userName);
	} else {
		validationFail(userName);
	}
	return userNameRegex;
}

//Helper function for Email
function validEmailCheck() {
	const emailValue = emailAddress.value;
	const testEmailValidity = /^[^@.]+@[^@.]+\.[a-z]+$/i.test(emailValue);

	if (testEmailValidity) {
		validationPass(emailAddress);
	} else {
		validationFail(emailAddress);
	}
	return testEmailValidity;
}


//Helper function Activities
const activitiesBox = document.querySelector("#activities-box");
// console.log(activitiesBox);

function validRegisterCheck() {
	if (total > 0) {
		validationPass(activitiesBox);
	} else {
		validationFail(activitiesBox);
	}
	return total > 0;
}



// Helper Function for Credit
const creditCardNumber = document.querySelector("#cc-num");
const zipCode = document.querySelector("#zip");
const cVVNumber = document.querySelector("#cvv");


function validCreditCardCheck() {
	const creditCardValue = creditCardNumber.value;
	const testCreditCard = /^[0-9]{13,16}$/.test(creditCardValue);
	if (testCreditCard) {
		validationPass(creditCardNumber);
	} else {
		validationFail(creditCardNumber);
	}
	return testCreditCard;
}

function validZipCodeCheck() {
	const zipCodeValue = zipCode.value;
	const testZipCode = /^\d{5}$/.test(zipCodeValue);
	if (testZipCode) {
		validationPass(zipCode);
	} else {

		validationFail(zipCode);
	}

	return testZipCode;
}

function validCVVCheck() {
	const cVVValue = cVVNumber.value;
	const testCVV = /^\d{3}$/.test(cVVValue);
	if (testCVV) {
		validationPass(cVVNumber);
	} else {
		validationFail(cVVNumber);
	}
	return testCVV;
}


//helper fuction that loads on page load
function validationPass(element) {
	element.parentElement.classList.add("valid");
	element.parentElement.classList.remove("not-valid");
	element.parentElement.lastElementChild.style.display = "none";
}

//helper function and loads on page load
function validationFail(element) {
	element.parentElement.classList.add("not-valid");
	element.parentElement.classList.remove("valid");
	element.parentElement.lastElementChild.style.display = "block";
}

//checks for input in the field and flags a green tick when correct
userName.addEventListener("keyup", validNameCheck);
emailAddress.addEventListener("keyup", validEmailCheck);

const creditCardOption = document.getElementById("payment");


console.log(creditCardOption);


conferenceForm.addEventListener("submit", (e) => {
	const creditCardSelected = creditCardOption.value;
	console.log(creditCardSelected);

	if (!validNameCheck()) {
		e.preventDefault();
	}

	if (!validEmailCheck()) {
		e.preventDefault();
	}

	if (!validRegisterCheck()) {
		e.preventDefault();
	}

	if (creditCardSelected === "credit-card") {
		if (!validCreditCardCheck()) {
			e.preventDefault();
		}

		if (!validZipCodeCheck()) {
			e.preventDefault();
		}

		if (!validCVVCheck()) {
			e.preventDefault();
		}
	}
});


/*** Accessibility ***/

const activityElement = document.querySelectorAll('input[type=checkbox]');

for (i = 0; i < activityElement.length; i++) {
	activityElement[i].addEventListener("focus", (e) => {
		e.target.parentElement.classList.add("focus");
	});
	activityElement[i].addEventListener("blur", (e) => {
		e.target.parentNode.classList.remove("focus");
	});
};