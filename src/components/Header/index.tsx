import HeaderLayout from "@/layouts/HeaderLayout";
import Logo from "@/components/Logo";
import { Link } from "react-router-dom";
import { HeaderItems } from "./header.items"; 
import { FC, useState } from "react";
import { IHeader } from "./header.interface";
import { Icon24View, Icon28Menu, Icon28Cancel } from "@vkontakte/icons";
import SelectLanguage from "../SelectLanguage";
import { useTranslation } from "react-i18next";
import { useMedia } from "use-media";

const Header: FC<IHeader> = ( { pageId } ) => {

    const [showMenu, setShowMenu] = useState<boolean>(false);
    const isMobile = useMedia('(max-width: 800px)')
    const { t } = useTranslation();

    const HeaderPCMenu = () => {
        return (
                <nav className='flex items-center gap-5'>
                    { HeaderItems.map( (Item, index) => {
                        return (pageId === Item.id) 
                            ? <span 
                                key={index} 
                                className='text-blue-700 fill-blue-700 cursor-default flex items-center gap-1'
                                >
                                { Item.icon && <Item.icon /> }
                                <p>{t(Item.name)}</p>
                                </span> 
                            : <Link
                                key={index}
                                to={ `/${Item.path}` }
                                className={ `text-gray-800 fill-gray-800 hover:text-blue-600 hover:fill-blue-600 flex items-center gap-1` }
                                >
                                { Item.icon && <Item.icon /> }
                                <p>{t(Item.name)}</p>
                            </Link>;
                    }) }
                    <nav className='flex gap-2 items-center'>
                        <button>
                            <Icon24View width={40} height={40} />
                        </button>
                        <SelectLanguage isMobile={false} />
                    </nav>
                </nav>
            );
    };

    const HeaderMobileMenu = () => {
        return (
                <nav className='fixed left-0 top-[79px] bg-[#F8F8F8] w-full flex flex-col gap-5 p-5 border-b border-b-gray-100'>
                    { HeaderItems.map( (Item, index) => {
                        return (pageId === Item.id) 
                            ? <span 
                                key={index} 
                                className='text-blue-700 fill-blue-700 cursor-default flex items-center gap-2'
                                >
                                { Item.icon && <Item.icon /> }
                                <p>{t(Item.name)}</p>
                                </span> 
                            : <Link
                                key={index}
                                to={ `/${Item.path}` }
                                className={ `text-gray-800 fill-gray-800 hover:text-blue-600 hover:fill-blue-600 flex items-center gap-2` }
                                >
                                { Item.icon && <Item.icon /> }
                                <p>{t(Item.name)}</p>
                            </Link>;
                    }) }
                    <SelectLanguage isMobile={true} />
                </nav>
            );
    };

    return (
        <HeaderLayout className={ !isMobile ? `bg-[rgba(255,255,255,0.3)] backdrop-blur-[10px]` : `bg-[#F8F8F8]` } >
            <div className='flex max-w-[1400px] w-full justify-between p-3 items-center'>
                <Logo />
                { !isMobile && <HeaderPCMenu /> }
                { isMobile && <button onClick={() => setShowMenu(!showMenu)}>
                    { !showMenu && <Icon28Menu color='rgb(31,41,55)' /> }
                    { showMenu && <Icon28Cancel color='rgb(31,41,55)' /> }
                </button> }
            </div>
            { (showMenu && isMobile ) && <HeaderMobileMenu /> }
        </HeaderLayout>
    );

};

export default Header;