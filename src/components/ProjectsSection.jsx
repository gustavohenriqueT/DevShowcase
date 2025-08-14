import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "OdsEcoBrasil",
    description:
      "Plataforma inovadora sobre Objetivos de Desenvolvimento Sustentável, utiliza Node.js, React e SQL. Foco em transparência, oferece contas personalizadas para acesso fácil a dados claros sobre ODS no Brasil.",
    image: "/projects/OdsEco.jpg",
    tags: ["Node.js", "JavaScript", "React", "Aws"],
    demoUrl: "",
    githubUrl: "https://github.com/gustavohenriqueT/ods-app.git",
  },
  {
    id: 2,
    title: "Dashboard de Análise de Dados Acadêmicos",
    description:
      "Projeto em Python e R para coleta, tratamento, análise e visualização de dados acadêmicos com foco em métricas de desempenho.",
    image: "/projects/Dashboard.png",
    tags: ["Python", "R", "PostgreSQL", "Pandas", "Matplotlib", "Docker", "Jenkins"],
    githubUrl: "https://github.com/gustavohenriqueT/AutomatedDataAnalysis.git",
  },
  {
    id: 3,
    title: "API para UNIMED",
    description:
      "Desenvolvi um sistema para a Unimed adotando a abordagem de código aberto, garantindo transparência e facilidade de manutenção. O front-end foi construído para proporcionar uma interface limpa e responsiva. No back-end, para manipulação e análise de dados, assegurando eficiência no processamento das informações.",
    image: "/projects/Unimed.png",
    tags: ["Python", "Flask", "Html", "Css", "Oracle"],
    githubUrl: "https://github.com/gustavohenriqueT/API-Atualizada.git",
  },

];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Projetos <span className="text-primary">Destaque</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Alguns dos meus projetos mais relevantes, desenvolvidos em backend e ciência de dados,
          aplicando boas práticas, escalabilidade e uso de tecnologias modernas.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/gustavohenriqueT"
          >
            Confira meu GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
