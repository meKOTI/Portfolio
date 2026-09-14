import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  return (
    <section id="home" className="pt-[70px] h-300">
      <h2>{t("home.title")}</h2>
      <p>{t("home.description")}</p>
    </section>
  );
}

export default Home;
