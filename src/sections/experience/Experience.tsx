import { useTranslation } from "react-i18next";

function Experience() {
  const { t } = useTranslation();

  return (
    <section
      id="experience"
      className="presentation-section"
      style={{ backgroundColor: "#f5a62380" }}
    >
      <h2>Experience</h2>
    </section>
  );
}

export default Experience;
