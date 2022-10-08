window.addEventListener('scroll', e => {
	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Update method
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
})


document.body.onload = function() {
    setTimeout(() => {
        var preloader = document.getElementById("loader-wrapper");
        if (!preloader.classList.contains("done")) {
            preloader.classList.add("done");
        }
    }, 800);
}