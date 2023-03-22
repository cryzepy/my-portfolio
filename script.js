// inisialisasi AOS
AOS.init({
	offest: 0
})

// Random time animation skills logo
const skillsLogo = document.querySelectorAll('.skills-logo')

.forEach(logo => {
	logo.style.animationDuration = `${~~(Math.random() * 3000 + 800)}ms`
});