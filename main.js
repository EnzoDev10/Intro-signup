const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
	input.addEventListener("input", (event) => {
		// Each time there is an input, checks if it is valid,
		// if it is, resets the error message and styles
		// In other case, calls for the error message.
		if (input.validity.valid) {
			let errorSpan = input.nextElementSibling;
			errorSpan.textContent = "";
			input.classList.remove("active");
		} else {
			showError(input);
		}
	});
});

form.addEventListener("submit", (event) => {
	inputs.forEach((input) => {
		// If all the fields are valid, lets the form submit
		if (!input.validity.valid) {
			// If any are invalid, calls for an error message to the necessary inputs
			showError(input);
			// Then prevent the form from being sent by canceling the event

			event.preventDefault();
		}
	});
});

function showError(input) {
	let errorSpan = input.nextElementSibling;
	if (input.validity.valueMissing) {
		// If the field is empty,
		// display the following error message.
		errorSpan.textContent = input.placeholder + " cannot be empty";
		// And adds styles to show that something is wrong.
		input.classList.add("active");
	} else if (input.validity.typeMismatch) {
		// If the field doesn't contain an email address,
		// display the following message.
		errorSpan.textContent = "Looks like this is not an email";
		input.classList.add("active");
	}
}
