import { Briefcase, Code, Database } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Sobre <span className="text-primary">Mim</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Desenvolvedor Backend & Cientista de Dados
            </h3>
            <p className="text-muted-foreground">
              Sou estudante de Ciência da Computação, com experiência prática no desenvolvimento e manutenção
              de <strong>APIs REST com Python e Node.js</strong> e integração de sistemas em ambientes corporativos.
              Minhas competências incluem modelagem de dados, otimização de consultas e aplicação de
              <strong> Docker</strong> para deploys consistentes.
            </p>
            <p className="text-muted-foreground">
              Tenho conhecimento também em <strong>Ciência de Dados</strong>, utilizando Python, R e PostgreSQL para análise,
              tratamento e visualização de dados, gerando insights para tomada de decisão.
              Tenho vivência em metodologias ágeis e foco em entregar soluções
              escaláveis, limpas e bem documentadas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Entrar em Contato
              </a>
              <a
                href="/GustavoTomazCV.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Baixar CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Desenvolvimento Backend</h4>
                  <p className="text-muted-foreground">
                    Criação e manutenção de APIs com Python e Node.js,
                    seguindo boas práticas, otimização e integração de sistemas.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Bancos de Dados & Processamento</h4>
                  <p className="text-muted-foreground">
                    Desenvolvi projetos com PostgreSQL e SQL, além de
                    manipulação e análise de dados com R e Python (Pandas, Matplotlib).
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Ciência de Dados</h4>
                  <p className="text-muted-foreground">
                    Coleta, limpeza e análise de dados para geração de relatórios e dashboards,
                    apoiando decisões estratégicas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
