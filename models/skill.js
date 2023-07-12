const skills = [
    {
      name: "HTML",
      level: "Advanced",
      experienceYears: 3,
    },
    {
      name: "CSS",
      level: "Intermediate",
      experienceYears: 2,
    },
    {
      name: "JavaScript",
      level: "Advanced",
      experienceYears: 4,
    },
    {
      name: "Python",
      level: "Advanced",
      experienceYears: 3,
    },
    {
      name: "Node.js",
      level: "Intermediate",
      experienceYears: 1,
    },
]

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
}

function getAll() {
    console.log(skills)
    return skills
}

function getOne(name) {
    return skills.find(skill => skill.name === name)
}

function create(skill) {
  // skill.skill
  if (skills.some(savedSkill => savedSkill.name.toLowerCase() === skill.name.toLowerCase())) return
  if (skill.name === "" || skill.experienceYears === "") return
  if (skill.years > 3) {
      skill.level = "Intermediate"
  } else {
      skill.level = "Advanced"
  }
  skills.push(skill)
}

function deleteOne(name) {
  let idx = skills.findIndex(skill => skill.name === name)
  skills.splice(idx, 1)
}