import HeaderLayout from "@/layouts/HeaderLayout";
import Logo from "@/components/Logo";
import { Link } from "react-router-dom";
import { HeaderItems } from "./header.items";
import { FC, useEffect, useState } from "react";
import { IHeader } from "./header.interface";
import {
  Icon28Menu,
  Icon28Cancel,
  Icon24View,
  Icon24AddOutline,
  Icon24MinusOutline,
  Icon20UserCircleOutline,
} from "@vkontakte/icons";
import SelectLanguage, { getCurrentLangKey } from "../SelectLanguage";
import { useTranslation } from "react-i18next";
import { useMedia } from "use-media";
import { Langugages } from "../SelectLanguage/language.type";
import { getWithExpiry } from "@/modules/cookie";

const Header: FC<IHeader> = ({ pageId }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const isMobile = useMedia("(max-width: 800px)");
  const { t, i18n } = useTranslation();
  const [isVisuallyImpaired, setIsVisuallyImpaired] = useState<boolean>(false);

  useEffect(() => {
    if (getWithExpiry("access_token") && getWithExpiry("v")) {
      HeaderItems[4].id = 6;
      HeaderItems[4].name = "headerProfile";
      HeaderItems[4].path =
        getWithExpiry("v") === "2" || getWithExpiry("v") === "3"
          ? "games"
          : "no_access";
      HeaderItems[4].icon = Icon20UserCircleOutline;
    }
    if (localStorage.getItem("isAuthed")) setIsAuth(true);
    else setIsAuth(false);
  }, []);

  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    if (storedLang) {
      const langKey = getCurrentLangKey(storedLang as Langugages);
      i18n.changeLanguage(langKey);
    }else {
      localStorage.setItem('lang', Langugages['RU']);
    }
  }, [i18n.language]);

  const increaseFontSize = () => {
    const elements = document.querySelectorAll<HTMLElement>("body *"); // Получаем все элементы на странице
    const maxIncrease = 20; // Максимальное увеличение от начального размера
    const minSize = 16; // Минимальный размер шрифта

    elements.forEach((element) => {
      const currentFontSize = parseFloat(getComputedStyle(element).fontSize);
      // Увеличиваем размер, если он меньше максимального
      if (currentFontSize < minSize + maxIncrease) {
        element.style.fontSize = `${currentFontSize + 1}px`;
      }
    });
  };

  const decreaseFontSize = () => {
    const elements = document.querySelectorAll<HTMLElement>("body *"); // Получаем все элементы на странице
    const maxDecrease = 10; // Максимальное уменьшение от начального размера
    const minSize = 16; // Минимальный размер шрифта

    elements.forEach((element) => {
      const currentFontSize = parseFloat(getComputedStyle(element).fontSize);
      // Уменьшаем размер, если он больше минимального
      if (currentFontSize > minSize - maxDecrease) {
        element.style.fontSize = `${currentFontSize - 1}px`;
      }
    });
  };

  const HeaderPCMenu = () => {
    return (
      <nav className="flex items-center gap-5">
        {HeaderItems.map((Item, index) => {
          return pageId === Item.id ? (
            <span
              key={index}
              className="text-blue-700 fill-blue-700 cursor-default flex items-center gap-1"
            >
              {Item.icon && <Item.icon />}
              <p>{t(Item.name)}</p>
            </span>
          ) : (
            <Link
              key={index}
              to={`/${Item.path}`}
              className={`text-gray-800 fill-gray-800 hover:text-blue-600 hover:fill-blue-600 flex items-center gap-1`}
            >
              {Item.icon && <Item.icon />}
              <p>{t(Item.name)}</p>
            </Link>
          );
        })}
        <nav className="flex gap-2 items-center">
          <button onClick={() => setIsVisuallyImpaired((prev) => !prev)}>
            <Icon24View width={40} height={40} />
          </button>
          <SelectLanguage isMobile={false} />
        </nav>
      </nav>
    );
  };

  const HeaderMobileMenu = () => {
    return (
      <nav
        className={`fixed left-0 ${isAuth ? "top-[79px]" : "top-[50px]"} bg-[#F8F8F8] w-full flex flex-col gap-5 p-5 border-b pt-20 border-b-gray-100`}
      >
        {HeaderItems.map((Item, index) => {
          return pageId === Item.id ? (
            <span
              key={index}
              className="text-blue-700 fill-blue-700 cursor-default flex items-center gap-2"
            >
              {Item.icon && <Item.icon />}
              <p>{t(Item.name)}</p>
            </span>
          ) : (
            <Link
              key={index}
              to={`/${Item.path}`}
              className={`text-gray-800 fill-gray-800 hover:text-blue-600 hover:fill-blue-600 flex items-center gap-2`}
            >
              {Item.icon && <Item.icon />}
              <p>{t(Item.name)}</p>
            </Link>
          );
        })}
        <SelectLanguage isMobile={true} />
      </nav>
    );
  };

  const VisuallyImpaired = () => {
    return (
      <div className="flex gap-3 items-center p-3">
        <button
          className="bg-[rgba(0,0,0,0.8)] p-3 rounded-md"
          onClick={() => increaseFontSize()}
        >
          <Icon24AddOutline color="white" />
        </button>
        <button
          className="bg-[rgba(0,0,0,0.8)] p-3 rounded-md"
          onClick={() => decreaseFontSize()}
        >
          <Icon24MinusOutline color="white" />
        </button>
      </div>
    );
  };

  return (
    <HeaderLayout
      className={
        !isMobile
          ? `bg-[rgba(255,255,255,0.3)] backdrop-blur-[10px]`
          : `bg-[#F8F8F8]`
      }
    >
      {!isMobile && isVisuallyImpaired && <VisuallyImpaired />}
      {isAuth && (
        <div className="w-full h-[40px] text-center flex justify-end items-center px-3 gap-2">
          {pageId !== 5 && (
            <Link
              to={"/product/add"}
              className="underline text-gray-800 hover:text-blue-500"
            >
              Добавить товар
            </Link>
          )}
          {pageId !== 6 && (
            <Link
              to={"/news/add"}
              className="underline text-gray-800 hover:text-blue-500"
            >
              Добавить новость
            </Link>
          )}
          {pageId !== 7 && (
            <Link
              to={"/services/add"}
              className="underline text-gray-800 hover:text-blue-500"
            >
              Добавить услугу
            </Link>
          )}
        </div>
      )}
      <div className="flex max-w-[1400px] w-full justify-end p-3 items-center">
        <div
          className={`left-[2em] ${isAuth ? "top-[2.5em]" : "top-[1em]"} fixed z-50`}
        >
          <Logo size={isMobile ? 60 : 80} />
        </div>
        {!isMobile && <HeaderPCMenu />}
        {isMobile && (
          <button onClick={() => setShowMenu(!showMenu)}>
            {!showMenu && <Icon28Menu color="rgb(31,41,55)" />}
            {showMenu && <Icon28Cancel color="rgb(31,41,55)" />}
          </button>
        )}
      </div>
      {showMenu && isMobile && <HeaderMobileMenu />}
    </HeaderLayout>
  );
};

export default Header;
