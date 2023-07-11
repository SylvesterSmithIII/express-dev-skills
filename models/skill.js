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
      name: "React",
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
    getAll
}

function getAll() {
    return skills
}