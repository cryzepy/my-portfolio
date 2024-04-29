const MIN_SKILL_MASTERY_SCORE = 75

const mySkill = [
	{
		skillName: "Programming",
		skills: [
			{
				skillName: "Artificial Intelligence",
				skills: [
					{name: "Python", mastery: 88}
				]
			},
			{
				skillName: "Mobile App Development",
				skills: [
					{name: "Kotlin", mastery: 77.5},
					{name: "Java", mastery: 45},
				]
			},
			{
				skillName: "Backend",
				skills: [
					{name: "Node.js", mastery: 62.5},
					{name: "Express.js", mastery: 70},
					{name: "JavaScript", mastery: 91}
				]
			},
			{
				skillName: "Web Development",
				skills: [
					{name: "React", mastery: 86},
					{name: "JavaScript", mastery: 91},
					{name: "JQuery", mastery: 64},
					{name: "HTML", mastery: 85},
					{name: "CSS", mastery: 77.5},
					{name: "Bootstrap", mastery: 77.5}
				]
			},
			{
				skillName: "Database",
				skills: [
					{name: "MongoDB", mastery: 75},
					{name: "MySQL", mastery: 75}
				]
			},
			{
				skillName: "General Programming",
				skills: [
					{name: "git", mastery: 74},
				]
			},
			{
				skillName: "Design",
				skills: [
					{name: "Figma", mastery: 62},
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