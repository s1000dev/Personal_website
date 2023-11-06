// burger mobile menu
function burgerMenu() {
	const burger = document.querySelector('.burger')
	const menuB = document.querySelector('.menu')
	const body = document.querySelector('body')
	burger.addEventListener('click', () => {
		if (!menuB.classList.contains('active')) {
			menuB.classList.add('active')
			burger.classList.add('active')
			body.classList.add('locked')
		} else {
			menuB.classList.remove('active')
			burger.classList.remove('active')
			body.classList.remove('locked')
		}
	})
	// We set a breakpoint for navbar here
	window.addEventListener('resize', () => {
		if (window.innerWidth > 991.98) {
			menuB.classList.remove('active')
			burger.classList.remove('active')
			body.classList.remove('locked')
		}
	})
}
burgerMenu();

let header = document.getElementById('header');

let second = document.getElementById('second');
let third = document.getElementById('third');
let thourth = document.getElementById('thourth');
let fifth = document.getElementById('fifth');
let nums = [second, third, thourth, fifth];

let logo = document.getElementById('logo');
let work = document.getElementById('work');
let skills = document.getElementById('skills');
let about = document.getElementById('about');
let contacts = document.getElementById('contacts');
let menu = [work, skills, about, contacts];

let links = document.querySelectorAll('.accordion__link, .accordtion__limg');

links.forEach(link => link.addEventListener('click', function(e){
	e.stopPropagation();
}))

window.addEventListener('DOMContentLoaded', () => {
	let pageSlider;
	let isPageInitialized = document.querySelector('.page-slider').classList.contains('swiper-initialized');
	let isPc = window.innerWidth >= 1025;
	let isTablet = window.innerWidth < 1024;

	if (!(isPc && !isPageInitialized)){
		const burger = document.querySelector('.burger')
		const menuB = document.querySelector('.menu')
		const body = document.querySelector('body')
		menu.forEach(link => {
			link.addEventListener('click', function(){
				menuB.classList.remove('active')
				burger.classList.remove('active')
				body.classList.remove('locked')
			})
		});
	}

	if (isPc && !isPageInitialized){
		pageSlider = new Swiper('.page-slider', {
			direction: 'vertical',
			spaceBetween: 0,
			slidesPerView: 'auto',
			speed: 800,
	
			keyboard: {
				enabled: true,
				onlyInViewport: true,
				pageUpDown: true
			},
	
			mousewheel: {
				sensitivity: 1.5,
			},
	
			watchOverFlow: true,
			init: false,
			allowTouchMove: false,
	
			on: {
				slideChange: (swiper) => {
					let current = swiper.realIndex;

					for(let i = 0; i < nums.length;i++){
						nums[i].classList.remove('active');
						menu[i].classList.remove('active');
					}
					
					if (current >= 1){
						header.classList.add('black');
						menu[current - 1].classList.add('active');
						for(let i = 0; i < current;i++){
							nums[i].classList.add('active');
						}
					} else {
						header.classList.remove('black');
					}
				},
			}
		})
		pageSlider.init();

		logo.addEventListener('click', function(e){
			e.preventDefault();

			pageSlider.slideTo(0);
		})
		for(let i = 0; i < menu.length;i++){
			menu[i].addEventListener('click', function(e){
				e.preventDefault();
				console.log('yes');
		
				pageSlider.slideTo(i + 1);
			})
		}

	} else if (isTablet && isPageInitialized) {
		pageSlider.destroy(true, true);
	}
	
})

let mode = 'js';
let layoutor = document.getElementById('layoutor');
let jsor = document.getElementById('jsor');

let accordlayout = document.querySelector('.accordion-layout');
let accordjs = document.querySelector('.accordion-js');

function clearLayout(){
	const items = document.querySelectorAll('.accordion-layout__item');
	items.forEach(item => {
		item.addEventListener('click', clickLayout);
	})
}
function clearJS(){
	const items = document.querySelectorAll('.accordion-js__item');
	items.forEach(item => {
		item.addEventListener('click', clickJS);
	})
}

function changeOrientation() {
	if(mode == 'layout'){
		clearLayout();
		accordionJS();
		mode = 'js';
		layoutor.addEventListener('click', changeOrientation);
		jsor.removeEventListener('click', changeOrientation);
	} else if (mode == 'js') {
		clearJS();
		accordionLayout();
		mode = 'layout';
		layoutor.removeEventListener('click', changeOrientation);
		jsor.addEventListener('click', changeOrientation);
	}
}

changeOrientation();

// Accordion
function accordionLayout() {
	jsor.classList.remove('active');
	layoutor.classList.add('active');

	accordlayout.classList.add('active');
	accordjs.classList.remove('active');
	const items = document.querySelectorAll('.accordion-layout__item');
	items.forEach(item => {
		item.addEventListener('click', clickLayout);
	})
}

function accordionJS() {
	layoutor.classList.remove('active');
	jsor.classList.add('active');

	accordlayout.classList.remove('active');
	accordjs.classList.add('active');
	const items = document.querySelectorAll('.accordion-js__item');
	items.forEach(item => {
		item.addEventListener('click',clickJS);
	})
}

function clickLayout(e){
	let parent = this;
	if (parent.classList.contains('accordion-layout__item-active')) {
		parent.classList.remove('accordion-layout__item-active')
	} else {
		document
			.querySelectorAll('.accordion-layout__item')
			.forEach(child => child.classList.remove('accordion-layout__item-active'))
		parent.classList.add('accordion-layout__item-active')
	}
}

function clickJS(e){
	let parent = this;
	if (parent.classList.contains('accordion-js__item-active')) {
		parent.classList.remove('accordion-js__item-active')
	} else {
		document
			.querySelectorAll('.accordion-js__item')
			.forEach(child => child.classList.remove('accordion-js__item-active'))
		parent.classList.add('accordion-js__item-active')
	}
}

let w = logo.getBoundingClientRect();
let full = document.querySelector('.fulllogo');
let logoFull = full.getBoundingClientRect();
let width = window.innerWidth;

if(width < 768){
	const tl = gsap.timeline()
	tl.fromTo(
		'.fulllogo',
		{
			opacity: 1,
		},
		{ opacity: 0, zIndex: '-2',},
		0.5,
	).fromTo(
		'.logo',
		{
			opacity: 0,
		},
		{ opacity: 1, duration: 1,},
		0.5,
	).fromTo(
		'.fullscreen',
		{
			opacity: 1,
		},
		{ opacity: 0, duration: 0.5,},
		0.5,
	).fromTo(
		'.fullscreen',
		{
			zIndex: '3',
		},
		{ zIndex: '-1',},
		1,
	)
} else {
	const tl = gsap.timeline()
	tl.fromTo(
		'.fulllogo',
		{
			x: 0,y: 0,
		},
		{ fontSize: '24px', x: -(logoFull.left - w.right + 71), y: -(logoFull.top - 19), duration: 0.7, stagger: 0.15 },
		0.5,
	).fromTo(
		'.fulllogo',
		{
			opacity: 1,
		},
		{ opacity: 0,},
		1.5,
	).fromTo(
		'.logo',
		{
			opacity: 0,
		},
		{ opacity: 1, duration: 0.5,},
		1.5,
	).fromTo(
		'.fullscreen',
		{
			opacity: 1,
		},
		{ opacity: 0, duration: 0.5,},
		0.5,
	).fromTo(
		'.fullscreen',
		{
			zIndex: '3',
		},
		{ zIndex: '-1',},
		1,
	)
}