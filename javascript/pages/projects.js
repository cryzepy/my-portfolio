// project_list item
//	name: required
//	link: String?
//	github: String?

const project_list = [
	{ name: "PKM-PM | Universitas Muhammadiyah Malang", link: "https://project-course-2-cli.vercel.app/" },
	{ name: "Daily Task", link: "https://cryzepy.github.io/daily-task/" },
	{ name: "Jadwal Sholat By Fikri Alfian", link: "https://cryzepy.github.io/Jadwal-Sholat-By-Fikrialfian/" },
	{ name: "CRUD MERN - Simple Project", link: "https://crud-mern-project-client.vercel.app/" }
]

const writeProjectList = () => {
	project_list.forEach(project => {

		const mainLink = project.link ? project.link : project.github

		const element_a = document.createElement("a")
		element_a.href = mainLink
		element_a.target = "_blank"
		element_a.dataset.aos = "fade-down"
		element_a.dataset.aosDuration = 800
		element_a.innerText = project.name
		project_container.appendChild(element_a)
	})
}

writeListItem(
	data = project_list, 
	headerElement = headerMyProjects, 
	listContainer = project_container, 
	writeListElement = writeProjectList, 
	noDataText = "No Project"
)
