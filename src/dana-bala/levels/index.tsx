import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ContainerLayout from "@/layouts/ContainerLayout";
import MainLayout from "@/layouts/MainLayout";
import { getWithExpiry } from "@/modules/cookie";
import { useEffect, useState } from "react";
import Iframe from "react-iframe";
import {
  Icon28Flash,
  Icon28Game,
  Icon24DoorArrowRightOutline,
  Icon24DownloadOutline
} from "@vkontakte/icons";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Levels() {
  const [isFirstGame, setIsFirstGame] = useState<boolean>(false);
  const [isSecondGame, setIsSecondGame] = useState<boolean>(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (
      (!getWithExpiry("access_token") && !getWithExpiry("v")) ||
      (getWithExpiry("v") != "2" && getWithExpiry("v") != "3")
    ) {
      document.location.href = "/";
    }
  }, []);

  if (
    (!getWithExpiry("access_token") && !getWithExpiry("v")) ||
    (getWithExpiry("v") != "2" && getWithExpiry("v") != "3")
  )
    document.location.href = "/";

  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("v");
    document.location.href = "/";
  };

  const GameFirst = () => (
    <Iframe
      width="100%"
      height="1000px"
      className="mt-8"
      url="https://center-competence.choices.kz/dana_bala2/"
    />
  );

  const GameSecond = () => (
    <Iframe
      width="100%"
      height="1000px"
      className="mt-8"
      url="https://center-competence.choices.kz/dana_bala/"
    />
  );

  const SelectGame = () => (
    <div className="w-full flex justify-center flex-wrap gap-2 my-16">
      <button
        onClick={() => setIsFirstGame(true)}
        className="flex items-center gap-2 justify-center bg-gradient-to-r from-green-500 via-emerald-50-500 to-blue-500 rounded-2xl text-4xl text-white font-medium p-5 w-full h-[360px]"
      >
        <Icon28Flash />
        {t("firstGame")}
      </button>
      <button
        onClick={() => setIsSecondGame(true)}
        className="flex items-center gap-3 justify-center bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 rounded-2xl text-4xl text-white font-medium p-5 w-full h-[360px]"
      >
        <Icon28Game />
        {t("secondGame")}
      </button>
    </div>
  );

  return (
    <ContainerLayout>
      <Header />
      <MainLayout className="flex-1 flex flex-col py-10 items-center px-5">
        <div className="flex w-full justify-between items-center">
          <Link to={'https://cloud.mail.ru/stock/aBsdPcft1CMx1kAGdUp5dfk5'} className="flex items-center gap-2 bg-blue-600 text-white p-2 px-4 rounded-lg text-lg">
            <Icon24DownloadOutline />
            {t('downloadGame')}
          </Link>
          <button
            onClick={() => logout()}
            className="flex items-center gap-2 bg-black text-white p-2 px-4 rounded-lg text-lg"
          >
            <Icon24DoorArrowRightOutline />
            {t("buttonExit")}
          </button>
        </div>
        {!isFirstGame && !isSecondGame && <SelectGame />}
        {(isFirstGame || isSecondGame) && (
          <button
            onClick={() => {
              if (isFirstGame) setIsFirstGame(false);
              else setIsSecondGame(false);
            }}
            className="bg-blue-500 text-white w-fit p-2 rounded-md px-3 text-base cursor-pointer"
          >
            {t("buttonInMenu")}
          </button>
        )}
        {isSecondGame && <GameSecond />}
        {isFirstGame && <GameFirst />}
      </MainLayout>
      <Footer />
    </ContainerLayout>
  );
}
