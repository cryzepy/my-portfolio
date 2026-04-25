

// project_list item
//	name: required
//	link: String?
//	github: String?
//	role: fe | be | fs

const project_list = [
	{ name: "JWT Auth System", github: "https://github.com/cryzepy/system-login-v1", role: "be" },
	{ name: "ShortLink API", github: "https://github.com/cryzepy/url-shortener", role: "be" },
	{ name: "Backend For Left Days Mobile App", github: "https://github.com/cryzepy/leftdays-backend", role: "be" },
	{ name: "MapIt Community (Peta Fasilitas Kelurahan Tunjungsekar, Malang)", link: "https://project-map-eight.vercel.app/", role: "fs" },
	{ name: "Online Project Course for PKM-PM, Muhammadiyah University Malang, 2023", link: "https://project-course-2-cli.vercel.app/", role: "fs" },
	{ name: "jadwal sholat di indonesia", github: "https://github.com/cryzepy/Jadwal-Sholat-By-Fikrialfian", link: "https://cryzepy.github.io/Jadwal-Sholat-By-Fikrialfian/", role: "fe" },
	{ name: "Product & Inventory Management API", github: "https://github.com/cryzepy/ecommerce-inventory-api", role: "be" },
	{ name: "Furniture Landing Page", github: "https://github.com/cryzepy/SkwnFrontendDev-1a-FikriAlfian", link: "https://cryzepy.github.io/SkwnFrontendDev-1a-FikriAlfian/",role: "fe" },
	{ name: "Finance App Dashboard", github: "https://github.com/cryzepy/SkwnFrontendDev-1b-FikriAlfian", link: "https://cryzepy.github.io/SkwnFrontendDev-1b-FikriAlfian/",role: "fe" },
]


const writeProjectList = projects => {

	projects.forEach(project => {

		const mainLink = project.link ? project.link : project.github

		const li = document.createElement("li")

		const element_a = document.createElement("a")
		element_a.href = mainLink
		element_a.target = "_blank"
		element_a.dataset.aos = "fade-right"
		element_a.dataset.aosDuration = 800
		element_a.innerText = project.name
		element_a.className = "project-item"

		project_container.appendChild(li)
		li.appendChild(element_a)

		if(project.link && project.github) {
			const githubElement = document.createElement("img")
			const imageLinkElement = document.createElement("a")
			imageLinkElement.target = "_blank"
			imageLinkElement.href = project.github
			githubElement.src = "assets/icons/logo-github-white.png"
			// imageLinkElement.dataset.aos = "fade-left"
			// imageLinkElement.dataset.aosDuration = 800

			li.appendChild(imageLinkElement)
			imageLinkElement.appendChild(githubElement)
		}

	})
}

const filterProjectByRole = getProjectByRole(typeRolePortofolio, project_list)

console.log("filterProjectByRole:", filterProjectByRole)

writeListItem(
	data = filterProjectByRole, 
	headerElement = headerMyProjects, 
	listContainer = project_container, 
	writeListElement = writeProjectList, 
	noDataText = "No Project"
)
