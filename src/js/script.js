const body = document.querySelector('body')
const burgerBtn = document.querySelector('.hamburger')
const mobileNav = document.querySelector('.mobile-nav')
const mobileNavItems = document.querySelectorAll('.mobile-nav__menu-item')
const portfolioElements = document.querySelectorAll('.portfolio-box__element-image')
const faqs = document.querySelectorAll('.faq-container')
const facebookBtn = document.querySelector('.facebook-btn')
const facebookBtn2 = document.querySelector('.footer-facebook')
const instagramBtn = document.querySelector('.instagram-btn')
const instagramBtn2 = document.querySelector('.footer-instagram')
const callBtn = document.querySelector('.navbar__call-button')
const callBtn2 = document.querySelector('.footer__desktop-cta-button')

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
facebookBtn.addEventListener('click', function () {
	window.location.href = 'https://www.facebook.com/kuba.romanski.54/'
})
instagramBtn.addEventListener('click', function () {
	window.location.href =
		'https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fkubaromanskiwebdev%3Figsh%3DMmFlaWl3cjE3NHNj%26fbclid%3DIwAR2ICSEfQ2bMV_vRU5JS15-szZw0r6pitkrhuplOFVXMrf1_03l-5gMi1zE_aem_AWuKqfVsm-RygaX6dD-lC51Y_91K_olP6x-UpbeBmID54XpiLpcK-jelPCVKzix2uI5fp0rypkMN_62P7hUaSbg7&h=AT2cb7UskGgXV_U1cMmLOTQNzyYO7O52mbF37k3o9qjTiKwwHFGhNwv0gcbvit3VGmnIxrDWTlvTG2yl-T-mFqME3Oi6Rc3dZNqbDu0IE7SAvVyVL470CVE2hPIJnS9P-a724a5-sK992R6H3F7Ucg'
})
facebookBtn2.addEventListener('click', function () {
	window.location.href = 'https://www.facebook.com/kuba.romanski.54/'
})
instagramBtn2.addEventListener('click', function () {
	window.location.href =
		'https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fkubaromanskiwebdev%3Figsh%3DMmFlaWl3cjE3NHNj%26fbclid%3DIwAR2ICSEfQ2bMV_vRU5JS15-szZw0r6pitkrhuplOFVXMrf1_03l-5gMi1zE_aem_AWuKqfVsm-RygaX6dD-lC51Y_91K_olP6x-UpbeBmID54XpiLpcK-jelPCVKzix2uI5fp0rypkMN_62P7hUaSbg7&h=AT2cb7UskGgXV_U1cMmLOTQNzyYO7O52mbF37k3o9qjTiKwwHFGhNwv0gcbvit3VGmnIxrDWTlvTG2yl-T-mFqME3Oi6Rc3dZNqbDu0IE7SAvVyVL470CVE2hPIJnS9P-a724a5-sK992R6H3F7Ucg'
})
callBtn.addEventListener('click', function () {
	window.location.href = 'tel:+48695145153'
})
callBtn2.addEventListener('click', function () {
	window.location.href = 'tel:+48695145153'
})
