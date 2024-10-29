import { useTranslation } from "react-i18next";
import { Icon28LogoInstagram } from "@vkontakte/icons";

const Footer = () => {

    const { t } = useTranslation();

    return (
        <footer className='bg-[rgba(0,0,0,0.9)] w-full px-4 py-7 flex flex-col items-center mt-8 gap-6'>
            <div className='w-full flex flex-wrap justify-around'>
                <div className='flex flex-col gap-2'>
                    <h3 className='text-gray-400'>{t('ourNetworks')}</h3>
                    <div>
                        <a href='https://instagram.com/' target="_blank" className='cursor-pointer'>
                            <Icon28LogoInstagram color="rgba(255,255,255,0.6)" />
                        </a>
                    </div>
                </div>
            </div>
            <p className='text-gray-500'>2024 © {t('welcome')}</p>
        </footer>
    );

};

export default Footer;