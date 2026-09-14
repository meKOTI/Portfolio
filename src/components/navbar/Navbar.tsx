import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

function Navbar() {
  const { t, i18n } = useTranslation();
  const [usedLanguage, setUsedLanguage] = useState("pl");
  const [isScrolled, setIsScrolled] = useState(false);

  const changeLanguage = (language: "pl" | "en") => {
    i18n.changeLanguage(language);
    setUsedLanguage(language);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={"navbar " + (isScrolled ? "navbar-scrolled" : "")}>
      <nav>
        <h3>patryk.kotula</h3>
        <a href="#home">{t("nav.home")}</a>
        <a href="#skills">{t("nav.skills")}</a>
        <a href="#projects">{t("nav.projects")}</a>
        <a href="#experience">{t("nav.experience")}</a>
        <a href="#education">{t("nav.education")}</a>
        <a href="#contact">{t("nav.contact")}</a>
      </nav>
      {usedLanguage === "pl" ? (
        <button
          className="language-button"
          onClick={() => changeLanguage("en")}
        >
          <img src="english.png" />
        </button>
      ) : (
        <button
          className="language-button"
          onClick={() => changeLanguage("pl")}
        >
          <img src="polish.png" />
        </button>
      )}
    </div>
  );
}

export default Navbar;
