

// project_list item
//	name: required
//	link: String?
//	github: String?
//	role: fe | be | fs
// quality_star: 1-5 

const PROJECT_FE = [
	{ id_project: 1, name: "Mapping System for Public Facilities - Tunjungsekar, Malang", github: "https://github.com/cryzepy/project-map", link: "https://project-map-eight.vercel.app/", role: "fe", quality_star: 3.9 },
	{ id_project: 2, name: "Online Project Course for PKM-PM, Muhammadiyah University Malang", link: "https://project-course-2-cli.vercel.app/", role: "fe", quality_star: 2.1 },
	{ id_project: 3, name: "jadwal sholat di indonesia", github: "https://github.com/cryzepy/Jadwal-Sholat-By-Fikrialfian", link: "https://cryzepy.github.io/Jadwal-Sholat-By-Fikrialfian/", role: "fe", quality_star: 1.8 },
	{ id_project: 4, name: "Furniture Landing Page", github: "https://github.com/cryzepy/SkwnFrontendDev-1a-FikriAlfian", link: "https://cryzepy.github.io/SkwnFrontendDev-1a-FikriAlfian/",role: "fe", quality_star: 3.2},
	{ id_project: 5, name: "Finance App Dashboard", github: "https://github.com/cryzepy/SkwnFrontendDev-1b-FikriAlfian", link: "https://cryzepy.github.io/SkwnFrontendDev-1b-FikriAlfian/",role: "fe", quality_star: 1.0},
	{ id_project: 6, name: "AlfiMart Enterprise - E-Commerce Platform", github: "https://github.com/cryzepy/alfimart-enterprise", link: "https://alfimart-enterprise.vercel.app/",role: "fe",quality_star: 4.7 },
	{ id_project: 7, name: "Instagram Follow Analyzer", github: "https://github.com/cryzepy/instagram-follow-analyzer", link: "https://instagram-follow-analyzer-black.vercel.app/",role: "fe", quality_star: 2.5 },
	{ id_project: 11, name: "NemuDiamond", github: null, link: "https://nemudiamond.store",role: "fe", quality_star: 3.9 },
]

const PROJECT_BE = [
	{ id_project: 8, name: "System Authentication API", github: "https://github.com/cryzepy/system-login-v1", role: "be", quality_star: 2.5 },
	{ id_project: 9, name: "ShortLink API", github: "https://github.com/cryzepy/url-shortener", role: "be", quality_star: 2.4 },
	{ id_project: 10, name: "Backend For Left Days Mobile App", github: "https://github.com/cryzepy/leftdays-backend", role: "be", quality_star: 2.0 },
	{ id_project: 1, name: "Mapping System for Public Facilities - Tunjungsekar, Malang", github: "https://github.com/cryzepy/project-map", link: "https://project-map-eight.vercel.app/", role: "be", quality_star: 4.0 },
	{ id_project: 2, name: "Online Project Course for PKM-PM, Muhammadiyah University Malang", link: "https://project-course-2-cli.vercel.app/", role: "be", quality_star: 2.1 },
	{ id_project: 13, name: "Product & Inventory Management API", github: "https://github.com/cryzepy/ecommerce-inventory-api", role: "be", quality_star: 3.6 },
	{ id_project: 11, name: "NemuDiamond", github: null, link: "https://nemudiamond.store",role: "be", quality_star: 2.5 },
	{ id_project: 6, name: "AlfiMart Enterprise - E-Commerce Platform", github: "https://github.com/cryzepy/alfimart-enterprise", link: "https://alfimart-enterprise.vercel.app/",role: "be",quality_star: 4.7 },
]

const PROJECT_FS = [
	{ id_project: 8, name: "System Authentication API", github: "https://github.com/cryzepy/system-login-v1", role: "fs", quality_star: 2.4 },
	{ id_project: 9, name: "ShortLink API", github: "https://github.com/cryzepy/url-shortener", role: "fs", quality_star: 2.3 },
	{ id_project: 10, name: "Backend For Left Days Mobile App", github: "https://github.com/cryzepy/leftdays-backend", role: "fs", quality_star: 1.9 },
	{ id_project: 1, name: "Mapping System for Public Facilities - Tunjungsekar, Malang", github: "https://github.com/cryzepy/project-map", link: "https://project-map-eight.vercel.app/", role: "fs", quality_star: 4.0 },
	{ id_project: 2, name: "Online Project Course for PKM-PM, Muhammadiyah University Malang", link: "https://project-course-2-cli.vercel.app/", role: "fs", quality_star: 2.2 },
	{ id_project: 3, name: "jadwal sholat di indonesia", github: "https://github.com/cryzepy/Jadwal-Sholat-By-Fikrialfian", link: "https://cryzepy.github.io/Jadwal-Sholat-By-Fikrialfian/", role: "fs", quality_star: 1.7 },
	{ id_project: 13, name: "Product & Inventory Management API", github: "https://github.com/cryzepy/ecommerce-inventory-api", role: "fs", quality_star: 3.5 },
	{ id_project: 4, name: "Furniture Landing Page", github: "https://github.com/cryzepy/SkwnFrontendDev-1a-FikriAlfian", link: "https://cryzepy.github.io/SkwnFrontendDev-1a-FikriAlfian/",role: "fs", quality_star: 3.1},
	{ id_project: 5, name: "Finance App Dashboard", github: "https://github.com/cryzepy/SkwnFrontendDev-1b-FikriAlfian", link: "https://cryzepy.github.io/SkwnFrontendDev-1b-FikriAlfian/",role: "fs", quality_star: 0.9},
	{ id_project: 6, name: "AlfiMart Enterprise - E-Commerce Platform", github: "https://github.com/cryzepy/alfimart-enterprise", link: "https://alfimart-enterprise.vercel.app/",role: "fs",quality_star: 4.8 },
	{ id_project: 11, name: "NemuDiamond", github: null, link: "https://nemudiamond.store",role: "fs", quality_star: 3.0 },
	{ id_project: 7, name: "Instagram Follow Analyzer", github: "https://github.com/cryzepy/instagram-follow-analyzer", link: "https://instagram-follow-analyzer-black.vercel.app/",role: "fs",quality_star: 2.2 },
]


const project_list = [...PROJECT_FE, ...PROJECT_BE, ...PROJECT_FS]


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

writeListItem(
	data = filterProjectByRole, 
	headerElement = headerMyProjects, 
	listContainer = project_container, 
	writeListElement = writeProjectList, 
	noDataText = "No Project",
	role=typeRolePortofolio
)


function filter_project_to_show(projects, role) {

	const MAX_PROJECT_TO_SHOW = 4
	const ROLE = ["fe","be","fs"]

	if(projects.length <= MAX_PROJECT_TO_SHOW) {
		return projects;
	}

	// kode ini untuk mengambil {MAX_PROJECT_TO_SHOW} terbaik berdasarkan quality_star
	const projects_filtered = []
	
	projects.sort((a,b) => a.quality_star > b.quality_star ? -1 : 1)

	const filter_max_project_to_show = projects.slice(0,MAX_PROJECT_TO_SHOW)
	projects_filtered.push(...filter_max_project_to_show)

	// jika fe maka minimal ada project dengan role fe, jika ada
	// jika be maka minimal ada project dengan role be, jika ada
	// jika fs maka minimal ada project dengan role fs, jika ada
	// for(let i = 0; i < ROLE.length; i++) {
		// cek role aktif
		// if(role==ROLE[i]) {
		// 	const ACTIVE_ROLE = ROLE[i]
		// 	// cek apakah ada project dengan role full tersebut
		// 	let exist_project_full = false
		// 	for(let j=0;j<projects.length;j++){
		// 		if(projects[j].role==ACTIVE_ROLE){
		// 			exist_project_full = true;
		// 			break;
		// 		}
		// 	}

		// 	// jika tidak ada project dengan role full, maka tidak perlu filter langsung trim projects
		// 	if(!exist_project_full) {
		// 		const filter_max_project_to_show = projects.slice(0,MAX_PROJECT_TO_SHOW)
		// 		projects_filtered.push(...filter_max_project_to_show)
		// 		break;
		// 	}

		// 	// jika ada project dengan role full, maka ambil minimal satu project dengan quantity tertinggi untuk dimasukkan
		// 	let finish_get_project_full = false
		// 	for(let i=0;i<projects.length;i++){
		// 		const PROJECT_ACTIVE = projects[i]

		// 		// jika project sudah mencapai maksimal project yang ditampilkan, maka break
		// 		if(!(projects_filtered.length<MAX_PROJECT_TO_SHOW)) {
		// 			break;
		// 		}

		// 		if(PROJECT_ACTIVE.role == role) {
		// 			projects_filtered.push(PROJECT_ACTIVE)
		// 			finish_get_project_full = true
		// 		}else{
		// 			// cek apakah project full sudah dimasukkan ke data project filter atau jika masih belum ada dan sisa lebih dari 1 slot maka tambahkan data
		// 			if(finish_get_project_full || projects_filtered.length < MAX_PROJECT_TO_SHOW - 1) {
		// 				projects_filtered.push(PROJECT_ACTIVE)
		// 			}else{
		// 				// skip ke project selanjutnya
		// 				continue;
		// 			}
		// 		}
		// 	}

		// 	break;
		// }
	// }
	

	return projects_filtered

}