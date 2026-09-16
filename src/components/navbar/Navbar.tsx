import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

function Navbar() {
  const { t, i18n } = useTranslation();
  const [usedLanguage, setUsedLanguage] = useState(
    i18n.language.startsWith("en") ? "en" : "pl",
  );
  const [isScrolled, setIsScrolled] = useState(false);
  const isHomePage = window.location.pathname === "/";

  const changeLanguage = (language: "pl" | "en") => {
    i18n.changeLanguage(language);
    setUsedLanguage(language);
    localStorage.setItem("portfolio-language", language);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sectionHref = (section: string) =>
    isHomePage ? `#${section}` : `/#${section}`;

  return (
    <div className={"navbar " + (isScrolled ? "navbar-scrolled" : "")}>
      <nav>
        <p className="navbar-brand" href={isHomePage ? "#home" : "/#home"}>
          patryk.kotula
        </p>
        <a href={sectionHref("home")}>{t("nav.home")}</a>
        <a href={sectionHref("skills")}>{t("nav.skills")}</a>
        <a href={sectionHref("projects")}>{t("nav.projects")}</a>
        <a href={sectionHref("experience")}>{t("nav.experience")}</a>
        <a href={sectionHref("contact")}>{t("nav.contact")}</a>
      </nav>

      {usedLanguage === "pl" ? (
        <button
          className="language-button"
          onClick={() => changeLanguage("en")}
          aria-label="Switch language to English"
        >
          <img src="/english.png" alt="English" />
        </button>
      ) : (
        <button
          className="language-button"
          onClick={() => changeLanguage("pl")}
          aria-label="Zmień język na polski"
        >
          <img src="/polish.png" alt="Polski" />
        </button>
      )}
    </div>
  );
}

export default Navbar;
