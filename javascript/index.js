const params = new URLSearchParams(window.location.search);

const typeRolePortofolio = params.get('t');

// element repleced
const txtDetailSkills = document.getElementById('txt-detail-skills');

const detailSectionSkills = [
    { 
        role: 'be',
        description: "IT student with an understanding of backend application development. Has an understanding of building APIs and database integration. Ready to learn, grow, and contribute to the software development team."
    },
    { 
        role: 'fe',
        description: "An IT student with a strong understanding of front-end development. Possesses the skills to build responsive, interactive web interfaces and integrate them with APIs. Eager to learn, grow, and contribute to a software development team."
    },
    { 
        role: 'fs',
        description: "An IT student with a solid understanding of full-stack application development. Possesses knowledge of API development, database integration, and user interface development. Eager to learn, grow, and contribute to a software development team."
    }
]


// handle backend developer portofolio
if (typeRolePortofolio === 'be') {
    // HOME > yang akan berupah detail portofolio backend developer
    // My Skills > Skill relevant
    // My Projects > Project Relevan
    const SklillName = "Backend Developer"
    console.log("ini portofolio backend developer")
} else if(typeRolePortofolio === 'fe') {
    console.log("ini portofolio frontend developer")
} else if(typeRolePortofolio == "fs") {
    console.log("ini portofolio fullstack developer")
} else {
    console.log("tidak ada portofolio yang dipilih")
}