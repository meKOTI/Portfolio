import { useState } from "react";
import { useTranslation } from "react-i18next";

type Section = "work" | "education" | "projects";

function Experience() {
  const { t } = useTranslation();

  const [activeSection, setActiveSection] = useState<Section>("work");

  return (
    <section
      id="experience"
      className="
        min-h-svh w-full
        flex items-center
        px-0 md:px-6
        pt-[70px] pb-12
      "
      style={{ backgroundColor: "#f5a62380" }}
    >
      <div
        className="
          w-full max-w-[1400px] mx-auto
          flex flex-col lg:flex-row min-h-[590px]
          bg-[#181818] p-0 lg:p-10 lg:pt-0
          border-y border-white md:border
          md:rounded-lg
        "
      >
        <div
          className="
            relative z-30 flex flex-row lg:flex-col m-0 w-full lg:w-auto
            shadow-[-10px_15px_10px_rgba(0,0,0,0.3)]
            md:rounded-t-lg lg:rounded-2xl overflow-hidden lg:overflow-visible
          "
        >
          <button
            onClick={() => setActiveSection("work")}
            className={`
              bg-[rgb(111,0,255)]
              flex-1 lg:flex-none p-3 sm:p-4 lg:p-5 lg:py-20
              text-white font-semibold uppercase text-xs sm:text-sm lg:text-xl
              transition-all duration-300
              ${
                activeSection === "work"
                  ? "opacity-100"
                  : "opacity-50 hover:opacity-75"
              }
            `}
          >
            Praca
          </button>

          <button
            onClick={() => setActiveSection("education")}
            className={`
              bg-[rgb(255,166,0)]
              flex-1 lg:flex-none p-3 sm:p-4 lg:p-5 lg:py-20
              text-white font-semibold uppercase text-xs sm:text-sm lg:text-xl
              transition-all duration-300
              ${
                activeSection === "education"
                  ? "opacity-100"
                  : "opacity-50 hover:opacity-75"
              }
            `}
          >
            Edukacja
          </button>

          <button
            onClick={() => setActiveSection("projects")}
            className={`
              bg-[rgb(0,204,255)]
              flex-1 lg:flex-none p-3 sm:p-4 lg:p-5 lg:py-20
              text-white font-semibold uppercase text-xs sm:text-sm lg:text-xl
              rounded-0 lg:rounded-b-2xl
              transition-all duration-300
              ${
                activeSection === "projects"
                  ? "opacity-100"
                  : "opacity-50 hover:opacity-75"
              }
            `}
          >
            Projekty
          </button>
        </div>

        {/* ===================================== */}
        {/* PRACA */}
        {/* ===================================== */}

        {activeSection === "work" && (
          <div className="relative w-full min-h-[520px] lg:h-[600px] px-5 sm:px-8 lg:px-0 py-8 lg:py-0">
            <div
              className="
                absolute
                left-8 sm:left-10 top-8 bottom-8
                w-px bg-white/40
                lg:left-1/2 lg:top-16 lg:bottom-auto
                lg:w-full lg:h-px lg:ml-5
                origin-bottom lg:origin-center
                animate-[timelineLineUp_500ms_ease-out_both] lg:animate-[timelineLineIn_500ms_ease-out_both]
                z-[10]
              "
            />

            <div className="relative h-full flex flex-col-reverse gap-10 pl-12 sm:pl-14 lg:pl-0 lg:grid lg:grid-cols-2 lg:gap-0 lg:mt-15 lg:items-start lg:mx-20">
              <div
                className="
                  relative flex flex-col items-start lg:items-center z-[100]
                  animate-[timelineItemIn_400ms_ease-out_200ms_both]
                "
              >
                <div
                  className="
                    absolute -left-[34px] sm:-left-[38px] top-1
                    w-0 h-0
                    border-t-[8px] border-t-transparent
                    border-b-[8px] border-b-transparent
                    border-r-[14px] border-r-[rgb(111,0,255)]
                    lg:static
                    lg:border-t-[17px] lg:border-t-[rgb(111,0,255)]
                    lg:border-b-0 lg:border-r-[10px] lg:border-r-transparent
                    lg:border-l-[10px] lg:border-l-transparent
                    lg:mb-2
                  "
                />

                <div className="hidden lg:block h-25 w-px bg-white/40" />

                <span className="font-mono text-xs text-white/60 lg:my-2">
                  maj 2023
                </span>

                <div
                  className="w-full lg:w-auto lg:mx-8 border border-white/20 rounded-lg p-4
                    transition-all duration-200 hover:border-white/40 hover:mx-7 hover:p-5
                  "
                >
                  <h3 className="font-[600]">NoMonday</h3>

                  <img />

                  <p className="mt-1 text-white/60">
                    Tworzenie stron internetowych oraz modernizacja kodu
                  </p>
                </div>
              </div>

              <div
                className="
                  relative flex flex-col items-start lg:items-center z-[100]
                  animate-[timelineItemIn_400ms_ease-out_350ms_both]
                "
              >
                <div
                  className="
                    absolute -left-[34px] sm:-left-[38px] top-1
                    w-0 h-0
                    border-t-[8px] border-t-transparent
                    border-b-[8px] border-b-transparent
                    border-r-[14px] border-r-[rgb(111,0,255)]
                    lg:static
                    lg:border-t-[17px] lg:border-t-[rgb(111,0,255)]
                    lg:border-b-0 lg:border-r-[10px] lg:border-r-transparent
                    lg:border-l-[10px] lg:border-l-transparent
                    lg:mb-2
                  "
                />

                <div className="hidden lg:block h-25 w-px bg-white/40" />

                <span className="font-mono text-xs text-white/60 lg:my-2">
                  mar 2024
                </span>

                <div
                  className="w-full lg:w-auto lg:mx-8 border border-white/20 rounded-lg p-4
                    transition-all duration-200 hover:border-white/40 hover:mx-7 hover:p-5
                  "
                >
                  <h3 className="font-[600]">FlatArt</h3>

                  <img />

                  <p className="mt-1 text-white/60">
                    Tworzenie stron internetowych, edycja i przygotowywanie
                    grafik, wprowadzenie i formatowanie tekstów w systemie
                    zarządzania treścią (CMS)
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===================================== */}
        {/* EDUKACJA */}
        {/* ===================================== */}

        {activeSection === "education" && (
          <div className="relative w-full min-h-[520px] lg:h-[600px] px-5 sm:px-8 lg:px-0 py-8 lg:py-0">
            <div
              className="
                absolute
                left-8 sm:left-10 top-8 bottom-8
                w-px bg-white/40
                lg:left-1/2 lg:top-16 lg:bottom-auto
                lg:w-full lg:h-px lg:ml-5
                origin-bottom lg:origin-center
                animate-[timelineLineUp_500ms_ease-out_both] lg:animate-[timelineLineIn_500ms_ease-out_both]
              "
            />

            <div className="relative h-full flex flex-col-reverse gap-10 pl-12 sm:pl-14 lg:pl-0 lg:grid lg:grid-cols-2 lg:gap-0 lg:mt-15 lg:items-start lg:mx-20">
              <div
                className="
                  relative flex flex-col items-start lg:items-center z-[100]
                  animate-[timelineItemIn_400ms_ease-out_200ms_both]
                "
              >
                <div
                  className="
                    absolute -left-[34px] sm:-left-[38px] top-1
                    w-0 h-0
                    border-t-[8px] border-t-transparent
                    border-b-[8px] border-b-transparent
                    border-r-[14px] border-r-[rgb(255,166,0)]
                    lg:static
                    lg:border-t-[17px] lg:border-t-[rgb(255,166,0)]
                    lg:border-b-0 lg:border-r-[10px] lg:border-r-transparent
                    lg:border-l-[10px] lg:border-l-transparent
                    lg:mb-2
                  "
                />

                <div className="hidden lg:block h-25 w-px bg-white/40" />

                <span className="mb-2 font-mono text-xs text-white/60 lg:my-2">
                  2021 - 2026
                </span>

                <div
                  className="w-full lg:w-auto lg:mx-8 border border-white/20 rounded-lg p-4
                    transition-all duration-200 hover:border-white/40 hover:mx-7 hover:p-5
                  "
                >
                  <h3 className="font-[600]">
                    Technikum im. Władysława Szybińskiego w Cieszynie
                  </h3>

                  <img />

                  <p className="mt-1 text-white/60">Technik programista</p>
                </div>
              </div>

              <div
                className="
                  relative flex flex-col items-start lg:items-center z-[100]
                  animate-[timelineItemIn_400ms_ease-out_350ms_both]
                "
              >
                <div
                  className="
                    absolute -left-[34px] sm:-left-[38px] top-1
                    w-0 h-0
                    border-t-[8px] border-t-transparent
                    border-b-[8px] border-b-transparent
                    border-r-[14px] border-r-[rgb(255,166,0)]
                    lg:static
                    lg:border-t-[17px] lg:border-t-[rgb(255,166,0)]
                    lg:border-b-0 lg:border-r-[10px] lg:border-r-transparent
                    lg:border-l-[10px] lg:border-l-transparent
                    lg:mb-2
                  "
                />

                <div className="hidden lg:block h-25 w-px bg-white/40" />

                <span className="mb-2 font-mono text-xs text-white/60 lg:my-2">
                  2026 - teraz
                </span>

                <div
                  className="w-full lg:w-auto lg:mx-8 border border-white/20 rounded-lg p-4
                    transition-all duration-200 hover:border-white/40 hover:mx-7 hover:p-5
                  "
                >
                  <h3 className="font-[600]">
                    Wyższa Szkoła Informatyki i Zarządzania w Bielsku-Białej
                  </h3>

                  <img />

                  <p className="mt-1 text-white/60">
                    Jestem na pierwszym roku na specjalizacji programowanie
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===================================== */}
        {/* PROJEKTY */}
        {/* ===================================== */}

        {activeSection === "projects" && (
          <div className="relative w-full min-h-[520px] lg:h-[600px] px-5 sm:px-8 lg:px-0 py-8 lg:py-0">
            <div
              className="
                absolute
                left-8 sm:left-10 top-8 bottom-8
                w-px bg-white/40
                lg:left-1/2 lg:top-16 lg:bottom-auto
                lg:w-full lg:h-px lg:ml-5
                origin-bottom lg:origin-center
                animate-[timelineLineUp_500ms_ease-out_both] lg:animate-[timelineLineIn_500ms_ease-out_both]
              "
            />

            <div className="relative h-full flex flex-col-reverse gap-10 pl-12 sm:pl-14 lg:pl-0 lg:grid lg:grid-cols-2 lg:gap-0 lg:mt-15 lg:items-start lg:mx-20">
              <div
                className="
                  relative flex flex-col items-start lg:items-center z-[100]
                  animate-[timelineItemIn_400ms_ease-out_200ms_both]
                "
              >
                <div
                  className="
                    absolute -left-[34px] sm:-left-[38px] top-1
                    w-0 h-0
                    border-t-[8px] border-t-transparent
                    border-b-[8px] border-b-transparent
                    border-r-[14px] border-r-[rgb(0,204,255)]
                    lg:static
                    lg:border-t-[17px] lg:border-t-[rgb(0,204,255)]
                    lg:border-b-0 lg:border-r-[10px] lg:border-r-transparent
                    lg:border-l-[10px] lg:border-l-transparent
                    lg:mb-2
                  "
                />

                <div className="hidden lg:block h-25 w-px bg-white/40" />

                <span className="mb-2 font-mono text-xs text-white/60 lg:my-2">
                  lip 2025 - maj 2026
                </span>

                <div
                  className="w-full lg:w-auto lg:mx-8 border border-white/20 rounded-lg p-4
                    transition-all duration-200 hover:border-white/40 hover:mx-7 hover:p-5
                  "
                >
                  <h3 className="font-[600]">Popilo</h3>

                  <img />

                  <p className="mt-1 text-white/60">
                    Aplikacja do nauki języka poprzez rozmowę
                  </p>
                </div>
              </div>

              <div
                className="
                  relative flex flex-col items-start lg:items-center z-[100]
                  animate-[timelineItemIn_400ms_ease-out_350ms_both]
                "
              >
                <div
                  className="
                    absolute -left-[34px] sm:-left-[38px] top-1
                    w-0 h-0
                    border-t-[8px] border-t-transparent
                    border-b-[8px] border-b-transparent
                    border-r-[14px] border-r-[rgb(0,204,255)]
                    lg:static
                    lg:border-t-[17px] lg:border-t-[rgb(0,204,255)]
                    lg:border-b-0 lg:border-r-[10px] lg:border-r-transparent
                    lg:border-l-[10px] lg:border-l-transparent
                    lg:mb-2
                  "
                />

                <div className="hidden lg:block h-25 w-px bg-white/40" />

                <span className="mb-2 font-mono text-xs text-white/60 lg:my-2">
                  lip 2026 - teraz
                </span>

                <div
                  className="w-full lg:w-auto lg:mx-8 border border-white/20 rounded-lg p-4
                    transition-all duration-200 hover:border-white/40 hover:mx-7 hover:p-5
                  "
                >
                  <h3 className="font-[600]">Pallet Production Designer</h3>

                  <img />

                  <p className="mt-1 text-white/60">
                    Jestem na pierwszym roku na specjalizacji programowanie
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Experience;
