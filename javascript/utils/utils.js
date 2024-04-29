function writeListItem(data, headerElement, listContainer, writeListElement, noDataText) {
	if(data.length == 0) {
		headerElement.innerText = noDataText
		listContainer.style.display = "none"
	} else {
		writeListElement()
	}
}

function removeLowSkill(data, minimumSkill) {

	const removeLowSkill = data.map(skill => {
		return {
			...skill,
			skills: skill.skills.map(subSkill => {
				return {
					...subSkill,
					skills: subSkill.skills.filter(superSubSkill => {
						return superSubSkill.mastery >= minimumSkill
					})
				}
			})
		}
	})

	const removeNullSkill = removeLowSkill.map(skill => {
		return {
			...skill,
			skills: skill.skills.filter(subSkill => {
				return subSkill.skills.length > 0
			})
		}
	})

	const removeNullCategory = removeNullSkill.filter(skill => {
		return skill.skills.length > 0
	})

	return removeNullCategory

}


function getRandomNumber(min, max) {
	return ~~(Math.random() * (max - min + 1) + min)
}