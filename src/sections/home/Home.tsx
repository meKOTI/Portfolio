import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="min-h-svh w-full scroll-mt-[70px] flex items-center pt-[102px] pb-12"
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
          <span className="block mb-2 md:mb-3 text-base md:text-lg xl:text-xl">
            {t("home.hello")}
          </span>

          <h1
            className="
              flex flex-col items-start
              font-sans font-normal
              text-[clamp(3.5rem,19vw,6rem)]
              md:text-[clamp(4rem,8vw,6.5rem)]
              lg:text-[clamp(4rem,6.4vw,7.5rem)]
              leading-[0.82] tracking-[-0.055em]
            "
          >
            <span>{t("home.firstname")}</span>
            <span className="text-accent">{t("home.lastname")}</span>
          </h1>

          <span
            className="
              block mt-6 lg:mt-10
              font-mono
              text-xs md:text-sm xl:text-base
              leading-relaxed
            "
          >
            {t("home.categories")}
          </span>
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
