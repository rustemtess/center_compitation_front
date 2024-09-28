import HeaderLayout from "@/layouts/HeaderLayout";
import Logo from "@/components/Logo";
import { Link } from "react-router-dom";
import { HeaderItems } from "./header.items"; 
import { FC } from "react";
import { IHeader } from "./header.interface";
import { Icon24View } from "@vkontakte/icons";
import SelectLanguage from "../SelectLanguage";
import { useTranslation } from "react-i18next";

const Header: FC<IHeader> = ( { pageId } ) => {

    const { t } = useTranslation();
    
    return (
        <HeaderLayout>
            <div className='flex max-w-[1400px] w-full justify-between p-3 items-center'>
                <Logo />
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
                        <SelectLanguage />
                    </nav>
                </nav>
            </div>
        </HeaderLayout>
    );

};

export default Header;