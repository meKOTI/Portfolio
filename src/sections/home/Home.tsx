import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  return (
    <section id="home" className="presentation-section">
      <div className="w-[50%] flex flex-col justify-center items-start text-left">
        <span className="pl-[11px] text-[24px]">{t("home.hello")}</span>
        <p className="pl-[5px] pt-[30px] pb-[23px] text-[96px] font-[400]">
          {t("home.firstname")}
        </p>
        <p
          className="pt-[40px] pb-[50px] text-[136px]"
          style={{ color: "var(--accent)" }}
        >
          {t("home.lastname")}
        </p>
        <span className="font-mono">{t("home.categories")}</span>
      </div>
      <div className="w-[50%]" style={{ backgroundColor: "#af833d80" }}>
        <p>img</p>
      </div>
    </section>
  );
}

export default Home;
