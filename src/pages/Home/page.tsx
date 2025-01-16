import MainLayout from "@/layouts/MainLayout";
import Header from "@/components/Header";
import ContainerLayout from "@/layouts/ContainerLayout";
import Home1 from "@/assets/img/home.png";
import Home2 from "@/assets/img/home_2.png";
import Home3 from "@/assets/img/home_3.png";
import Home4 from "@/assets/img/home_4.png";
import Home5 from "@/assets/img/home_5.png";
import {
  Icon16ArrowRightOutline,
  Icon28ChevronRightCircle,
  Icon28VoiceOutline,
  Icon28BrainOutline,
  Icon28SchoolOutline,
  Icon28SunOutline,
  Icon28DocumentOutline,
  Icon28UserMicrophoneBadgeOutline,
  Icon24ArmchairOutline,
  Icon28HandHeartOutline,
  Icon28GameOutline,
  Icon28HeartCircleOutline,
  Icon24MagicWandOutline,
  Icon28HorseToyOutline,
  Icon28EducationOutline,
  Icon28GlobeOutline,
  Icon24HomeHeartOutline,
  Icon28BookSpreadOutline,
} from "@vkontakte/icons";
import Block from "@/components/Block";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import News from "@/components/News";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <ContainerLayout>
      <Header pageId={1} />
      <MainLayout className="flex-1 flex flex-col gap-[10em] sm:pt-[8em] pt-[6em] px-4">
        <div className="w-full flex justify-center items-center p-1 gap-20 flex-wrap gap-y-10">
          <div className="flex flex-col gap-4">
            <h1 className="max-w-[700px] text-3xl font-medium text-[#3c3d51]">
              {t("goShop")}
            </h1>
            <Link
              className="w-fit text-white px-5 py-2 bg-blue-600 hover:bg-blue-500 text-lg rounded-md"
              to={"/shop"}
            >
              {t("buttonGoShop")}
            </Link>
          </div>
          <img src={Home5} className="sm:w-[250px] w-[200px]" />
        </div>
        <div className="w-full flex justify-center items-center p-1 gap-4 flex-wrap">
          <img src={Home1} className="sm:w-[400px] w-[300px]" />
          <h1 className="max-w-[700px] sm:text-3xl text-2xl text-left font-medium text-[#3c3d51]">
            {t("welcome")}
          </h1>
        </div>
        {/** News block */}
        <div className="w-full flex flex-col gap-6">
          <div className="relative w-full">
            <hr className="w-full" />
            <h1 className="absolute left-1/2 transform -translate-x-1/2 text-gray-800 mt-[-0.8em] sm:text-2xl text-lg bg-[var(--background--)] sm:w-fit w-[205px] px-4">
              {t("allNews")}
            </h1>
          </div>
          <div className="overflow-x-hidden overflow-y-hidden">
            <News />
          </div>
          <Link
            to={"/allnews"}
            className="underline text-center text-blue-700 hover:text-blue-500 mt-[-1em]"
          >
            {t("showAllNews")}
          </Link>
        </div>
        {/** Information */}
        <div className="w-full flex justify-center items-center p-1 gap-8 flex-wrap">
          <div className="w-full max-w-[800px] flex flex-col gap-4">
            <h1 className="text-4xl font-semibold text-gray-700">
              {t("homeAboutProject")}
            </h1>
            <h5 className="text-xl text-gray-600">{t("homeProjectInfo6")}</h5>
            <p className="text-xl flex flex-col gap-2">
              <span>{t("homeProjectInfo1")}</span>
              <span>{t("homeProjectInfo2")}</span>
              <span>{t("homeProjectInfo3")}</span>
              <span>{t("homeProjectInfo4")}</span>
              <span>{t("homeProjectInfo5")}</span>
            </p>
          </div>
          <img src={Home4} className="sm:w-[380px] w-[280px]" />
        </div>
        {/** Our goal */}
        <div className="w-full flex justify-center items-center p-1 gap-8 flex-wrap-reverse">
          <img src={Home2} className="sm:w-[280px] w-[200px]" />
          <div className="w-full max-w-[800px] flex flex-col gap-3">
            <h1 className="text-4xl font-semibold text-gray-700">
              {t("homeProjectGoal")}
            </h1>
            <p className="text-xl">{t("homeProjectGoalInfo")}</p>
            <button
              onClick={() =>
                document.getElementById("result")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="flex items-center sm:gap-2 gap-4 p-2 w-fit rounded-md"
            >
              <Icon16ArrowRightOutline width={20} height={20} color="orange" />
              <p className="font-medium text-gray-800 text-left">
                {t("homeProjectGoalButton")}
              </p>
            </button>
          </div>
        </div>
        {/** Result */}
        <div
          id="result"
          className="w-full flex justify-center items-center p-1 sm:gap-8 gap-2 flex-wrap"
        >
          <div className="w-full max-w-[800px] flex flex-col gap-3">
            <h1 className="text-4xl font-semibold text-gray-700">
              {t("homeRelase")}
            </h1>
            <p className="text-xl">{t("homeRelaseInfo")}</p>
            <button
              onClick={() =>
                document.getElementById("blocks")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="flex items-center gap-2 p-2 w-fit rounded-md"
            >
              <Icon28ChevronRightCircle width={24} height={24} color="blue" />
              <p className="font-medium text-gray-800">
                {t("homeRelaseButton")}
              </p>
            </button>
          </div>
          <img src={Home3} width={380} className="sm:w-[380px] w-[280px]" />
        </div>
        {/** Blocks */}
        <div id="blocks" className="flex flex-wrap gap-4 justify-center">
          <Block text={t("homeRelaseInfo1")} Icon={Icon28BookSpreadOutline} />
          <Block text={t("homeRelaseInfo2")} Icon={Icon28VoiceOutline} />
          <Block text={t("homeRelaseInfo3")} Icon={Icon28EducationOutline} />
          <Block text={t("homeRelaseInfo4")} Icon={Icon28HeartCircleOutline} />
          <Block text={t("homeRelaseInfo5")} Icon={Icon28BrainOutline} />
          <Block text={t("homeRelaseInfo6")} Icon={Icon24MagicWandOutline} />
          <Block text={t("homeRelaseInfo7")} Icon={Icon24HomeHeartOutline} />
          <Block text={t("homeRelaseInfo8")} Icon={Icon28GlobeOutline} />
          <Block text={t("homeRelaseInfo9")} Icon={Icon24ArmchairOutline} />
          <Block
            text={t("homeRelaseInfo10")}
            Icon={Icon28UserMicrophoneBadgeOutline}
          />
          <Block text={t("homeRelaseInfo11")} Icon={Icon28DocumentOutline} />
          <Block text={t("homeRelaseInfo12")} Icon={Icon28GameOutline} />
          <Block text={t("homeRelaseInfo13")} Icon={Icon28HandHeartOutline} />
          <Block text={t("homeRelaseInfo14")} Icon={Icon28SchoolOutline} />
          <Block text={t("homeRelaseInfo15")} Icon={Icon28HorseToyOutline} />
          <Block text={t("homeRelaseInfo16")} Icon={Icon28SunOutline} />
        </div>
      </MainLayout>
      <Footer />
    </ContainerLayout>
  );
};

export default HomePage;
