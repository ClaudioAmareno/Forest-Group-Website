const body = document.querySelector('.body')
const navScreen = document.querySelector('.nav-screen')
const navLinkMobile = document.querySelectorAll('.nav-link-mobile')
const links = document.querySelectorAll('.nav-link')
const burgerBtn = document.querySelector('.burger')
const first = document.querySelector('.first')
const second = document.querySelector('.second')
const third = document.querySelector('.third')
const footerYear = document.querySelector('.year')

document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar')

	function addShadow() {
		if (window.scrollY >= 300) {
			nav.classList.add('shadow-bg')
		} else {
			nav.classList.remove('shadow-bg')
		}
	}

	window.addEventListener('scroll', addShadow)
})

const showNav = () => {
	navScreen.classList.toggle('custom-active')
	body.classList.toggle('stop-scrolling')
	first.classList.toggle('rotate-bar-first')
	second.classList.toggle('rotate-bar-second')
	third.classList.toggle('rotate-bar-third')
}

const handleCurrenYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

const observer = new IntersectionObserver(
	entries => {
		entries.forEach(entry => {
			const id = entry.target.id
			const menuItem = document.querySelector(`#desktop-nav-${id}`)
			
			if (entry.isIntersecting) {
				if (menuItem) {
					menuItem.classList.add('active-state')
				}
			} else {
				if (menuItem) {
					menuItem.classList.remove('active-state')
				}
			}
		})
	},
	{ threshold: 0.7 }
)

document.querySelectorAll('.section').forEach(section => {
	observer.observe(section)
})

handleCurrenYear()
burgerBtn.addEventListener('click', showNav)
navLinkMobile.forEach(btn => {
	btn.addEventListener('click', showNav)
})
