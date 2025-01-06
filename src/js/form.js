const nameInput = document.querySelector('.input-name')
const alertName = document.querySelector('.alert-name')
const alertNameText = document.querySelector('.alert-name-text')
const surname = document.querySelector('.input-surname')
const alertSurname = document.querySelector('.alert-surname')
const alertSurnameText = document.querySelector('.alert-surname-text')
const email = document.querySelector('.input-email')
const alertEmail = document.querySelector('.alert-email')
const alertEmailText = document.querySelector('.alert-email-text')
const question = document.querySelector('.input-question')
const alertQuestion = document.querySelector('.alert-question')
const alertQuestionText = document.querySelector('.alert-question-text')
const buttonContact = document.querySelector('.button-contact')
const popup = document.querySelector('.popup')
const popupBtn = document.querySelector('.popup-btn')
const body = document.querySelector('.body')

const nameCheck = () => {
	if (nameInput.value == 0) {
		alertName.style.display = 'block'
		alertNameText.style.display = 'block'
	} else {
		alertName.style.display = 'none'
		alertNameText.style.display = 'none'
	}
}
const surnameCheck = () => {
	if (surname.value == 0) {
		alertSurname.style.display = 'block'
		alertSurnameText.style.display = 'block'
	} else {
		alertSurname.style.display = 'none'
		alertSurnameText.style.display = 'none'
	}
}
const emailCheck = () => {
	if (
		!email.value.match(
			/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
		)
	) {
		alertEmail.style.display = 'block'
		alertEmailText.style.display = 'block'
	} else {
		alertEmail.style.display = 'none'
		alertEmailText.style.display = 'none'
	}
}
const questionCheck = () => {
	if (question.value == 0) {
		alertQuestion.style.display = 'block'
		alertQuestionText.style.display = 'block'
	} else {
		alertQuestion.style.display = 'none'
		alertQuestionText.style.display = 'none'
	}
}

const showPopup = () => {
	if (
		nameInput.value !== 0 &&
		question.value !== 0 &&
		surname.value !== 0 &&
		email.value.match(
			/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
		)
	) {
		popup.style.display = 'flex'
		body.classList.add('stop-scrolling')
	}
}

const closePopup = () => {
	popup.style.display = 'none'
	body.classList.remove('stop-scrolling')
}

buttonContact.addEventListener('click', () => {
	nameCheck(), surnameCheck(), emailCheck(), questionCheck()
	showPopup()
})

popupBtn.addEventListener('click', closePopup)
