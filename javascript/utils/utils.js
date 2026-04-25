function writeListItem(data, headerElement, listContainer, writeListElement, noDataText) {
	if(data.length == 0) {
		headerElement.innerText = noDataText
		listContainer.style.display = "none"
	} else {
		writeListElement(data)
	}
}

function removeLowSkill(skills, minimumMasteryScore) {

	const skillWithLowMasteryRemoved = []
	for(const skill of skills) {
		// remove skill yang memiliki mastery dibawah minimumMasteryScore
		if(skill.mastery >= minimumMasteryScore) {
			skillWithLowMasteryRemoved.push(skill)
		}
	}

	return skillWithLowMasteryRemoved

}

function getSkillByRole(role, skills) {

	if(role === "be") {
		return skills.filter(skill => {

			if(typeof skill.typeRole === "string") {
				return skill.typeRole === "be"
			}else if(Array.isArray(skill.typeRole)) {
				return skill.typeRole.includes("be")
			}
			return false
		}
	)
	} else if(role === "fe") {
		return skills.filter(skill => {
			if(typeof skill.typeRole === "string") {
				return skill.typeRole === "fe"
			}else if(Array.isArray(skill.typeRole)) {
				return skill.typeRole.includes("fe")
			}
			return false
		}
	)
	}

	return skills

}

function getProjectByRole(role, projects) {
	if(role === "be") {
		return projects.filter(project => project.role === "be" || project.role === "fs")
	} else if(role === "fe") {
		return projects.filter(project => project.role === "fe" || project.role == "fs")
	}else{
		return projects
	}
}


function getRandomNumber(min, max) {
	return ~~(Math.random() * (max - min + 1) + min)
}