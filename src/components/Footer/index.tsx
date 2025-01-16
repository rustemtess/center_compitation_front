import { useSSR, useTranslation } from "react-i18next";
import { Icon28LogoInstagram, Icon28Phone } from "@vkontakte/icons";
import { load } from '@fingerprintjs/fingerprintjs';
import { useEffect, useState } from "react";

const Footer = () => {
  const { t } = useTranslation();
  const [uid, setUid] = useState<string>();
  useEffect(() => {
    load().then(fp => fp.get()).then(result => setUid(result.visitorId))
  })

  return (
    <footer className="bg-[rgba(0,0,0,0.9)] w-full px-4 py-7 flex flex-col items-center mt-8 gap-3">
      <div className="w-full flex flex-wrap justify-around">
        <div className="flex flex-col gap-2">
          <h3 className="text-gray-400">{t("ourNetworks")}</h3>
          <div className="flex w-full justify-center gap-2">
            <a
              href="https://www.instagram.com/damu_alany_vku/"
              target="_blank"
              title="Instagram"
              className="cursor-pointer"
            >
              <Icon28LogoInstagram color="rgba(255,255,255,0.6)" />
            </a>
            <a
              href="https://wa.me/77013457728"
              target="_blank"
              title="WhatsApp"
              className="cursor-pointer"
            >
              <Icon28Phone color="rgba(255,255,255,0.6)" />
            </a>
          </div>
        </div>
      </div>
      <p className="text-gray-500">2024 © {t("welcome")}</p>
      <p className="text-gray-500 text-xs">ID: { uid }</p>
    </footer>
  );
};

export default Footer;
