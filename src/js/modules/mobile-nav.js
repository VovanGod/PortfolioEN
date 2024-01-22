function mobileNav() {
	// Mobile nav button
	const navBtn = document.querySelector('.mobile-nav-btn');
	const nav = document.querySelector('.mobile-nav');

	navBtn.onclick = function () {
		nav.classList.toggle('mobile-nav--open');
		navBtn.classList.toggle('mobile-nav-btn--open');
	};
}

const hrefNav = document.querySelectorAll('.nav-href');
const navBtn = document.querySelector('.mobile-nav-btn');
const nav = document.querySelector('.mobile-nav');

hrefNav.forEach(function(item) {
	item.addEventListener('click', function() {
		nav.classList.toggle('mobile-nav--open');
		navBtn.classList.toggle('mobile-nav-btn--open');
	});

	nav.onclick = offermob;
});

function offermob () {
    document.body.classList.remove('no-scroll');
	nav.classList.toggle('mobile-nav-active');
	navBtn.classList.toggle('mobile-nav-btn-active');
};

export default mobileNav;