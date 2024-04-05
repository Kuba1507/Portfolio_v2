const body = document.querySelector("body");
const burgerBtn = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");
const mobileNavItems = document.querySelectorAll(".mobile-nav__menu-item");

const handleNav = () => {
	mobileNav.classList.toggle("show-mobile-nav");
	handleBurgerAnimation();
	handleNavItemsAnimation();
	deleteAnimation();
	// blockScroll();
};

const closeNav = () => {
	burgerBtn.classList.remove("is-active");
	mobileNav.classList.remove("show-mobile-nav");
	body.classList.remove("block-scroll");
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

// const blockScroll = () => {
// 	body.classList.add("block-scroll");
// };

burgerBtn.addEventListener("click", handleNav);
mobileNavItems.forEach((item) => {
	item.addEventListener("click", closeNav);
});
