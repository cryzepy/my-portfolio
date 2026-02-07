const MIN_SKILL_MASTERY_SCORE = 75

const mySkill = [
	{
		skillName: "Programming",
		skills: [
			{
				skillName: "Mobile App Development",
				skills: [
					{name: "Jetpack Compose (Kotlin)", mastery: 77.5},
				]
			},
			{
				skillName: "Backend",
				skills: [
		
					{name: "Express (JavaScript)", mastery: 75}
				]
			},
			{
				skillName: "Web Development",
				skills: [
					{name: "Vue (TypeScript)", mastery: 75},
					{name: "React (JavaScript)", mastery: 86},
					{name: "JQuery", mastery: 75},
					{name: "HTML", mastery: 85},
					{name: "CSS", mastery: 77.5},
					{name: "Bootstrap", mastery: 77.5},
					{name: "Tailwind", mastery: 75}
				]
			},
			{
				skillName: "Database",
				skills: [
					{name: "MongoDB", mastery: 75},
					{name: "MySQL", mastery: 75},
					{name: "SQLite", mastery: 75},
					 
				]
			},
			{
				skillName: "Version Control System",
				skills: [
					{name: "Github", mastery: 75},
				]
			},
			{
				skillName: "Design",
				skills: [
					{name: "Figma", mastery: 75},
					{name: "Canva", mastery: 75},
				]
			},
				{
				skillName: "Others",
				skills: [
					{name: "Microsoft Office", mastery: 75},
				]
			}
		]
	}
]

const filterLowSkill = removeLowSkill(mySkill, MIN_SKILL_MASTERY_SCORE)

filterLowSkill.forEach(skill => {

	const skillDiv = document.createElement("div")
	skillDiv.className = `skill-div ${skill.skillName.replace(" ","")}`
	skillsContainer.appendChild(skillDiv)

	const skillsHeader = document.createElement("h1")
	skillsHeader.className = "skills-header"
	skillsHeader.innerText = skill.skillName
	skillDiv.appendChild(skillsHeader)

	const subSkillContainer = document.createElement("div")
	subSkillContainer.className = "sub-skill-container"
	skillDiv.appendChild(subSkillContainer)

	let index = 0

	skill.skills.forEach(subSkillItem => {
		const subSkill = document.createElement("div")
		subSkill.className = "sub-skill"
		subSkillContainer.appendChild(subSkill)
		const skillSecondHeader = document.createElement("h2")
		skillSecondHeader.className = "skill-second-header"
		skillSecondHeader.innerText = subSkillItem.skillName
		subSkill.appendChild(skillSecondHeader)
		const listSkill = document.createElement("ul")
		listSkill.className = "list-skill"
		subSkill.appendChild(listSkill)
		subSkillItem.skills.forEach(unitSkill => {
			const skillItem = document.createElement("li")
			skillItem.className = "skill-item"
			skillItem.innerText = unitSkill.name
			listSkill.appendChild(skillItem)

			// aturan menentukan rotate: jika index genap maka rotate bilangan negative dan jika tidak sebaliknya, dan untuk nilai rotatenya random dari angka 2 - 5
			const rotateValue = `${index % 2 == 0 ? "-" : ""}${getRandomNumber(2, 4)}deg`
			skillItem.style.rotate = rotateValue
			console.log(rotateValue)
			index++
		})
	})

})