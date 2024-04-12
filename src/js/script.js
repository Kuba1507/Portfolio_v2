const body = document.querySelector("body");
const burgerBtn = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");
const mobileNavItems = document.querySelectorAll(".mobile-nav__menu-item");
const portfolioElements = document.querySelectorAll(
	".portfolio-box__element-image"
);
const faqs = document.querySelectorAll(".faq-container");
const username = document.querySelector("#name");
const email = document.querySelector("#mail");
const subject = document.querySelector("#subject");
const messege = document.querySelector("#messege");
const sendBtn = document.querySelector(".send");
const clearBtn = document.querySelector(".clear");
const popup = document.querySelector(".popup");

const handleNav = () => {
	mobileNav.classList.toggle("show-mobile-nav");
	handleBurgerAnimation();
	handleNavItemsAnimation();
	deleteAnimation();
	handleScroll();
};

const closeNav = () => {
	burgerBtn.classList.remove("is-active");
	mobileNav.classList.remove("show-mobile-nav");
	handleScroll();
};

const handleBurgerAnimation = () => {
	burgerBtn.classList.toggle("is-active");
};

const handleNavItemsAnimation = () => {
	let delayTime = 0;

	mobileNavItems.forEach((item) => {
		item.classList.toggle("nav-items-animation");
		item.style.animationDelay = "." + delayTime + "s";
		delayTime++;
	});
};

const deleteAnimation = () => {
	mobileNavItems.forEach((item) => {
		item.addEventListener("click", () => {
			mobileNavItems.forEach((el) => {
				el.classList.remove("nav-items-animation");
			});
		});
	});
};

const handleScroll = () => {
	if (burgerBtn.classList.contains("is-active")) {
		body.classList.add("block-scroll");
	} else {
		body.classList.remove("block-scroll");
	}
};

function handleWebsite() {
	const url = this.getAttribute("data-url");

	if (url) {
		window.open(url, "_blank");
	}
}

const handleFaq = (event) => {
	const clickedFaq = event.currentTarget;

	faqs.forEach((faq) => {
		if (faq !== clickedFaq) {
			faq.classList.remove("active");
		}
	});

	clickedFaq.classList.toggle("active");
};

const showError = (input, messege) => {
	const formBox = input.parentElement;
	const errorMsg = formBox.querySelector(".error-text");

	formBox.classList.add("error");
};

const clearError = (input) => {
	const formBox = input.parentElement;
	formBox.classList.remove("error");
};

const checkForm = (input) => {
	input.forEach((el) => {
		if (el.value === "") {
			showError(el, el.placeholder);
		} else {
			clearError(el);
		}
	});
};

burgerBtn.addEventListener("click", handleNav);
mobileNavItems.forEach((item) => {
	item.addEventListener("click", closeNav);
});
portfolioElements.forEach((element) => {
	element.addEventListener("click", handleWebsite);
});
faqs.forEach((faq) => {
	faq.addEventListener("click", handleFaq);
});
clearBtn.addEventListener("click", (e) => {
	e.preventDefault();

	[username, email, subject, messege].forEach((el) => {
		el.value = "";
	});
});
sendBtn.addEventListener("click", (e) => {
	e.preventDefault();

	checkForm([username, email, subject, messege]);
});
