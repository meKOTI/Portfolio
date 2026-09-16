import { useTranslation } from "react-i18next";
import { projects } from "../../data/projects";

type ProjectPageProps = {
  slug: string;
};

function ProjectPage({ slug }: ProjectPageProps) {
  const { t, i18n } = useTranslation();
  const language = i18n.language.startsWith("pl") ? "pl" : "en";
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="project-page project-not-found">
        <p>{t("projectPage.notFound")}</p>
        <a href="/#projects">← {t("projectPage.back")}</a>
      </main>
    );
  }

  return (
    <main className="project-page">
      <header className="project-page-hero">
        <a className="project-back" href="/#projects">← {t("projectPage.back")}</a>
        <span className="project-page-category">
          {project.category === "web" ? t("projects.web") : t("projects.game")}
        </span>
        <h1>{project.title}</h1>
        <p>{project.shortDescription[language]}</p>
        <div className="technology-list technology-list--large">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      </header>

      <div className={`project-page-art project-page-art--${project.accent}`} aria-hidden="true">
        <span>{project.title}</span>
        <div className="project-page-orbit" />
      </div>

      <section className="project-detail-grid">
        <div>
          <span className="section-eyebrow">01</span>
          <h2>{t("projectPage.overview")}</h2>
        </div>
        <p>{project.description[language]}</p>
      </section>

      <section className="project-detail-grid">
        <div>
          <span className="section-eyebrow">02</span>
          <h2>{t("projectPage.process")}</h2>
        </div>
        <p>{t("projectPage.processPlaceholder")}</p>
      </section>

      <section className="project-gallery-placeholder">
        <span>{t("projectPage.gallery")}</span>
        <p>{t("projectPage.galleryPlaceholder")}</p>
      </section>

      <footer className="project-page-footer">
        <a href="/#projects">← {t("projectPage.allProjects")}</a>
      </footer>
    </main>
  );
}

export default ProjectPage;
