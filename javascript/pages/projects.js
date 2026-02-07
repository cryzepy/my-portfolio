// project_list item
//	name: required
//	link: String?
//	github: String?

const project_list = [
	{ name: "Website - jadwal sholat di indonesia", github: "https://github.com/cryzepy/Jadwal-Sholat-By-Fikrialfian",link: "https://cryzepy.github.io/Jadwal-Sholat-By-Fikrialfian/"},
	{ name: "Backend - JWT Auth System", github: "https://github.com/cryzepy/system-login-v1"},
	{ name: "Backend - ShortLink API", github: "https://github.com/cryzepy/url-shortener"}
]

const writeProjectList = () => {
	project_list.forEach(project => {

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

writeListItem(
	data = project_list, 
	headerElement = headerMyProjects, 
	listContainer = project_container, 
	writeListElement = writeProjectList, 
	noDataText = "No Project"
)
