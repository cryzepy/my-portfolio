// inisialisasi AOS
AOS.init({
	offest: 0
})

// Random time animation skills logo
const skillsLogo = document.querySelectorAll('.skills-logo').forEach(logo => {
	logo.style.animationDuration = `${~~(Math.random() * 3000 + 800)}ms`
})

// daftar Project
const project_list = [
	{ name: "PKM-PM | Universitas Muhammadiyah Malang", link: "https://project-course-2-cli.vercel.app/" },
	{ name: "Daily Task", link: "https://cryzepy.github.io/daily-task/" },
	{ name: "Jadwal Sholat By Fikri Alfian", link: "https://cryzepy.github.io/Jadwal-Sholat-By-Fikrialfian/" },
	{ name: "CRUD MERN - Simple Project", link: "https://crud-mern-project-client.vercel.app/" },
]
const project_container = document.getElementById("projects-items-container")
project_list.forEach(project => {
	const element_a = document.createElement("a")
	element_a.href = project.link
	element_a.target = "_blank"
	element_a.dataset.aos = "fade-down"
	element_a.dataset.aosDuration = 800
	element_a.innerText = project.name
	project_container.appendChild(element_a)
})

// link project 
// name project