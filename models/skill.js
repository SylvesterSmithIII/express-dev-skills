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
      experienceYears: 2,
    },
    {
      name: "Node.js",
      level: "Intermediate",
      experienceYears: 1,
    },
]

module.exports = {
    getAll,
    getOne
}

function getAll() {
    return skills
}

function getOne(name) {
    return skills.find(skill => skill.name === name)
}