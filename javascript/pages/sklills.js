const MIN_SKILL_MASTERY_SCORE = 75


const CATEGORIES ={
	"Mobile App Development": "Programming",
	"Backend": "Programming",
	"Web Development": "Programming",
	"Database": "Programming",
	"Version Control System": "Programming",
	"Design": "Programming",
	"Others": "Programming"
}


const mySkill = [
	{ 
		name: "Jetpack Compose (Kotlin)", 
		mastery: 77.5,
		typeRole: "fe",
		category: "Mobile App Development",
	},
	{
		name: "Express (JavaScript)",
		mastery: 75,
		typeRole: "be",
		category: "Backend",
	},
	{
		name: "Vue (TypeScript)",
		mastery: 75,
		typeRole: "fe",
		category: "Web Development",
	},
	{
		name: "React (JavaScript)",
		mastery: 86,
		typeRole: "fe",
		category: "Web Development",
	},
	{
		name: "JQuery",
		mastery: 75,
		typeRole: "fe",
		category: "Web Development",
	},
	{
		name: "HTML",
		mastery: 85,
		typeRole: "fe",
		category: "Web Development",
	},
	{
		name: "CSS",
		mastery: 77.5,
		typeRole: "fe",
		category: "Web Development",
	},
	{
		name: "Bootstrap",
		mastery: 77.5,
		typeRole: "fe",
		category: "Web Development",
	},
	{
		name: "Tailwind",
		mastery: 75,
		typeRole: "fe",
		category: "Web Development",
	},
	{
		name: "MongoDB",
		mastery: 75,
		typeRole: "be",
		category: "Database",
	},
	{
		name: "MySQL",
		mastery: 75,
		typeRole: "be",
		category: "Database",
	},
	{
		name: "SQLite",
		mastery: 75,
		typeRole: "be",
		category: "Database",
	},
	{
		name: "Github",
		mastery: 75,
		typeRole: ["fe", "be"],
		category: "Version Control System"
	},
	{
		name: "Figma",
		mastery: 75,
		typeRole: "fe",
		category: "Design"
	},
	{
		name: "Canva",
		mastery: 75,
		typeRole: "fe",
		category: "Design"
	},
	{
		name: "Microsoft Office",
		mastery: 75,
		typeRole: ["fe", "be"],
		category: "Others"
	}
]

const skillsWithRole = getSkillByRole(typeRolePortofolio, mySkill)
const filterLowSkill = removeLowSkill(skillsWithRole, MIN_SKILL_MASTERY_SCORE)

console.log(filterLowSkill)


const superCategoryHeader = new Set(filterLowSkill.map(skill => CATEGORIES[skill.category]))
const allCategory = new Set(filterLowSkill.map(skill => skill.category))


for(const superCategory of superCategoryHeader) {

	const skillDiv = document.createElement("div")
	skillDiv.className = `skill-div ${superCategory.replace(" ","")}`
	skillsContainer.appendChild(skillDiv)

	const skillsHeader = document.createElement("h1")
	skillsHeader.className = "skills-header"
	skillsHeader.innerText = superCategory
	skillDiv.appendChild(skillsHeader)

	const subSkillContainer = document.createElement("div")
	subSkillContainer.className = "sub-skill-container"
	skillDiv.appendChild(subSkillContainer)

	let index = 0

	for(const category of allCategory) {

		if(superCategory == CATEGORIES[category]) {
			const subSkill = document.createElement("div")
			subSkill.className = "sub-skill"
			subSkillContainer.appendChild(subSkill)
			const skillSecondHeader = document.createElement("h2")
			skillSecondHeader.className = "skill-second-header"
			skillSecondHeader.innerText = category
			subSkill.appendChild(skillSecondHeader)
			const listSkill = document.createElement("ul")
			listSkill.className = "list-skill"
			subSkill.appendChild(listSkill)

			for(const skill of filterLowSkill) {
				if(skill.category == category && CATEGORIES[skill.category] == superCategory) {
					const skillItem = document.createElement("li")
					skillItem.className = "skill-item"
					skillItem.innerText = skill.name
					listSkill.appendChild(skillItem)

					// aturan menentukan rotate: jika index genap maka rotate bilangan negative dan jika tidak sebaliknya, dan untuk nilai rotatenya random dari angka 2 - 5
					const rotateValue = `${index % 2 == 0 ? "-" : ""}${getRandomNumber(2, 4)}deg`
					skillItem.style.rotate = rotateValue
					console.log(rotateValue)
					index++
				}
			}

		}
	}


}