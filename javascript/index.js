const detailPortofolioElement = document.getElementById('txt-detail-skills');


const params = new URLSearchParams(window.location.search);

const typeRolePortofolio = params.get('t') || "fs";

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
        description: "Fresh graduate Teknik Informatika dan Full-Stack Developer yang memiliki fondasi kuat dalam pengembangan frontend dan backend berbasis Next.js, React, dan Express melalui berbagai proyek terapan. Terbiasa membangun aplikasi web dari tahap perancangan hingga pengelolaan data. Cepat beradaptasi dengan teknologi baru dan sangat antusias untuk mempraktikkan keterampilan teknis pada standar industri nyata."
    }
]


// handle backend developer portofolio
if (typeRolePortofolio === 'be') {
    detailPortofolioElement.innerText = detailSectionSkills.find(detail => detail.role === "be").description
} else if(typeRolePortofolio === 'fe') {
    detailPortofolioElement.innerText = detailSectionSkills.find(detail => detail.role === "fe").description
} else {
    detailPortofolioElement.innerText = detailSectionSkills.find(detail => detail.role === "fs").description
} 