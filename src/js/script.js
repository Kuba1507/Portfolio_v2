const body = document.querySelector('body')
const burgerBtn = document.querySelector('.hamburger')
const mobileNav = document.querySelector('.mobile-nav')
const navbar = document.querySelector('.navbar')
const mobileNavItems = document.querySelectorAll('.mobile-nav__menu-item')
const portfolioElements = document.querySelectorAll('.portfolio-box__element-image')
const faqs = document.querySelectorAll('.faq-container')
const ctaButton = document.querySelector('.right-side__cta-button')
const facebookBtn = document.querySelector('.facebook-btn')
const facebookBtn2 = document.querySelector('.footer-facebook')
const instagramBtn = document.querySelector('.instagram-btn')
const instagramBtn2 = document.querySelector('.footer-instagram')
const callBtn = document.querySelector('.navbar__call-button')
const callBtn2 = document.querySelector('.footer__desktop-cta-button')
const cookieBox = document.querySelector('.cookie-box')
const cookieBtn = document.querySelector('.cookie-box__btn')

const handleNav = () => {
	mobileNav.classList.toggle('show-mobile-nav')
	handleBurgerAnimation()
	handleNavItemsAnimation()
	deleteAnimation()
	handleScroll()
}

const closeNav = () => {
	burgerBtn.classList.remove('is-active')
	mobileNav.classList.remove('show-mobile-nav')
	handleScroll()
}

const handleBurgerAnimation = () => {
	burgerBtn.classList.toggle('is-active')
}

const handleNavItemsAnimation = () => {
	let delayTime = 0

	mobileNavItems.forEach(item => {
		item.classList.toggle('nav-items-animation')
		item.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}

const deleteAnimation = () => {
	mobileNavItems.forEach(item => {
		item.addEventListener('click', () => {
			mobileNavItems.forEach(el => {
				el.classList.remove('nav-items-animation')
			})
		})
	})
}

const handleScroll = () => {
	if (burgerBtn.classList.contains('is-active')) {
		body.classList.add('block-scroll')
	} else {
		body.classList.remove('block-scroll')
	}
}

function handleWebsite() {
	const url = this.getAttribute('data-url')

	if (url) {
		window.open(url, '_blank')
	}
}

const handleFaq = event => {
	const clickedFaq = event.currentTarget

	faqs.forEach(faq => {
		if (faq !== clickedFaq) {
			faq.classList.remove('active')
		}
	})

	clickedFaq.classList.toggle('active')
}

const changeNavbarColor = () => {
	const aboutMeSection = document.querySelector('.about-me')
	const benefitsSection = document.querySelector('.benefits')
	const portfolioSection = document.querySelector('.portfolio')
	const featuresSection = document.querySelector('.features')
	const commentsSection = document.querySelector('.comments')
	const faqSection = document.querySelector('.faq')

	const sections = [
		{ element: aboutMeSection, color: '#fdfdfdcc' },
		{ element: benefitsSection, color: '#f5f5f5cc' },
		{ element: portfolioSection, color: '#fdfdfdcc' },
		{ element: featuresSection, color: '#f5f5f5cc' },
		{ element: commentsSection, color: '#fdfdfdcc' },
		{ element: faqSection, color: '#f5f5f5cc' },
	]

	let isNearAnySection = false

	sections.forEach(section => {
		const distanceFromTop = section.element.getBoundingClientRect().top

		if (distanceFromTop <= 20) {
			navbar.style.backgroundColor = section.color
			isNearAnySection = true
		}
	})

	if (!isNearAnySection) {
		navbar.style.backgroundColor = '#f5f5f5cc'
	}
}

const showCookie = () => {
	const cookieEaten = localStorage.getItem('cookie')

	if (cookieEaten) {
		cookieBox.classList.add('hide')
	}
}

const handleCookieBox = () => {
	localStorage.setItem('cookie', 'true')

	cookieBox.classList.add('hide')
}

burgerBtn.addEventListener('click', handleNav)
mobileNavItems.forEach(item => {
	item.addEventListener('click', closeNav)
})
portfolioElements.forEach(element => {
	element.addEventListener('click', handleWebsite)
})
faqs.forEach(faq => {
	faq.addEventListener('click', handleFaq)
})
window.addEventListener('scroll', changeNavbarColor)
ctaButton.addEventListener('click', function () {
	const contactSection = document.querySelector('.contact')
	const distanceToTop = contactSection.offsetTop

	window.scrollTo({
		top: distanceToTop,
		behavior: 'smooth',
	})
})
facebookBtn.addEventListener('click', function () {
	window.location.href = 'https://www.facebook.com/kuba.romanski.54/'
})
instagramBtn.addEventListener('click', function () {
	window.location.href = 'https://www.instagram.com/kubawebsites/'
})
facebookBtn2.addEventListener('click', function () {
	window.location.href = 'https://www.facebook.com/kuba.romanski.54/'
})
instagramBtn2.addEventListener('click', function () {
	window.location.href = 'https://www.instagram.com/kubawebsites/'
})
callBtn.addEventListener('click', function () {
	window.location.href = 'tel:+48695145153'
})
callBtn2.addEventListener('click', function () {
	window.location.href = 'tel:+48695145153'
})
cookieBtn.addEventListener('click', handleCookieBox)
