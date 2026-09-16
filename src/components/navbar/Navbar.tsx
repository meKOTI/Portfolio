import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

function Navbar() {
  const { t, i18n } = useTranslation();
  const [usedLanguage, setUsedLanguage] = useState(
    i18n.language?.startsWith("en") ? "en" : "pl",
  );
  const [scrolled, setScrolled] = useState(false);

  const changeLanguage = (language: "pl" | "en") => {
    i18n.changeLanguage(language);
    setUsedLanguage(language);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass =
    "relative shrink-0 text-[0.78rem] lg:text-[0.95rem] font-semibold text-[var(--text)] no-underline transition-colors hover:text-[var(--text-h)] " +
    "after:content-[''] after:absolute after:h-px after:w-0 after:bg-[#ffcc41] after:left-1/2 after:-translate-x-1/2 after:-bottom-[3px] after:transition-[width] after:duration-400 hover:after:w-full";

  return (
    <>
      <header
        className={`
          fixed inset-x-0 top-0 z-[1000]
          h-[70px] flex items-center
          bg-[var(--bg-transparent)] backdrop-blur-xl
          border-b transition-colors
          ${scrolled ? "border-white/10" : "border-transparent"}
        `}
      >
        <nav
          className="
            w-full max-w-[1400px] mx-auto
            px-5 md:px-8 xl:px-16
            flex items-center gap-3 md:gap-5 lg:gap-8
            overflow-x-auto [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
            pr-[66px]
          "
        >
          <span className="hidden md:block mr-auto shrink-0 text-left text-sm lg:text-[0.95rem] font-semibold">
            patryk.kotula
          </span>

          <a className={linkClass} href="#home">
            {t("nav.home")}
          </a>
          <a className={linkClass} href="#skills">
            {t("nav.skills")}
          </a>
          <a className={linkClass} href="#projects">
            {t("nav.projects")}
          </a>
          <a className={linkClass} href="#experience">
            {t("nav.experience")}
          </a>
          <a className={linkClass} href="#contact">
            {t("nav.contact")}
          </a>
        </nav>
      </header>

      <button
        className="
          fixed top-8 right-0 xl:right-[max(14px,calc((100vw-1400px)/2))]
          -translate-y-1/2 z-[1001]
          w-[34px] md:w-[42px]
          p-0 border-0 bg-transparent cursor-pointer
        "
        onClick={() => changeLanguage(usedLanguage === "pl" ? "en" : "pl")}
        aria-label={
          usedLanguage === "pl" ? "Switch to English" : "Zmień na polski"
        }
      >
        <img
          className="block w-full h-auto"
          src={usedLanguage === "pl" ? "/polish.png" : "/english.png"}
          alt=""
        />
      </button>
    </>
  );
}

export default Navbar;
