import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="min-h-svh w-full scroll-mt-[200px] flex items-center pt-[70px] pb-12"
    >
      <div
        className="
          w-full max-w-[1400px] mx-auto
          px-5 md:px-8 xl:px-16
          grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]
          items-center gap-10 lg:gap-16 xl:gap-24
        "
      >
        <div className="min-w-0 text-left pt-[5vh] lg:pt-0">
          <span className="block mb-2 text-xl md:text-2xl xl:text-3xl">
            {t("home.hello")}
          </span>

          <h1
            className="
              flex flex-col items-start
              font-sans font-normal
              text-[clamp(4rem,24vw,7rem)]
              md:text-[clamp(4.5rem,20vw,8rem)]
              lg:text-[clamp(4.5rem,16vw,9rem)]
              leading-[0.83] tracking-[-0.05em]
            "
          >
            <span>{t("home.firstname")}</span>
            <span className="text-accent pl-[0.27em]">
              {t("home.lastname")}
            </span>
          </h1>

          <span
            className="
              block mt-2 lg:mt-3
              font-mono
              text-xs md:text-sm xl:text-base
              leading-relaxed
            "
          >
            {t("home.categories")}
          </span>
          <p className="text-sm mt-6">{t("home.description")}</p>
          <div className="mt-4 lg:mt-6 flex justify-center w-[100%] lg:w-[80%]">
            <a
              className="m-3 w-10"
              href="https://www.facebook.com/patryk.kotula.73/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/facebook.svg" />
            </a>
            <a
              className="m-3 w-10"
              href="https://github.com/meKOTI"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/github.svg" />
            </a>
            <a
              className="m-3 w-10"
              href="https://www.linkedin.com/in/patryk-kotula-a0b32b309/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/linkedin.svg" />
            </a>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="
            w-full max-w-[520px] lg:max-w-[680px]
            mx-auto lg:ml-auto lg:mr-0
            aspect-[4/5] lg:aspect-[1.08/1]
            bg-[#af833d80]
            overflow-hidden
            grid place-items-start justify-center
          "
        >
          <p>img</p>
        </div>
      </div>
    </section>
  );
}

export default Home;
