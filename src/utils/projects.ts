type Project = {
    name: string,
    repo: string
}

const PROJECTS: Map<string, Project> = new Map();

PROJECTS.set("nanaica", {
    name: "NanaicaMC",
    repo: "Nanaica/NanaicaMC"
});

PROJECTS.set("cherrymc", {
    name: "CherryMC",
    repo: "Nanaica/CherryMC"
});

export default PROJECTS;
