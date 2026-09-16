import { useTranslation } from "react-i18next";
import type { Project } from "../../data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

function ProjectCard({ project, index }: ProjectCardProps) {
  const { t, i18n } = useTranslation();
  const language = i18n.language.startsWith("pl") ? "pl" : "en";

  return (
    <article className={`project-card project-card--${project.accent}`}>
      <div className="project-visual" aria-hidden="true">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <div className="project-orbit" />
      </div>

      <div className="project-copy">
        <span className="project-category">
          {project.category === "web" ? t("projects.web") : t("projects.game")}
        </span>
        <h3>{project.title}</h3>
        <p>{project.shortDescription[language]}</p>

        <div className="technology-list">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <a className="project-link" href={`/projects/${project.slug}`}>
          {t("projects.viewProject")} <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;
