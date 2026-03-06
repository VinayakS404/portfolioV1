const projectsRaw = [
  {
    name: "APPLE PIE",
    technologies: ["JS", "React", "SpringBoot", "SQL", "Python"],
    desc: "adf I am curre the technologies I'm currently working with as I continue building projects and improving my practical skills I am currently pursuing Bachelor of Computer Applications (BCA) while learning Java full-stack development alongside my studies. These are the technologies I'm currently working with as I continue building projects and improving my practical skills",
    website: true,
    websiteLink: "xyz.com",
    sourceLink: "github.com///",
    img: "variable",
  },
];

export const projects = projectsRaw.map((items, index) => ({
  ...items,
  id: `projects-${items.name}-${index}`,
}));
