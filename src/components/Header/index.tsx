import HeaderLayout from "@/layouts/HeaderLayout";
import Logo from "@/components/Logo";
import { Link } from "react-router-dom";
import { HeaderItems } from "./header.items"; 
import { FC } from "react";
import { IHeader } from "./header.interface";
import { Icon24View } from "@vkontakte/icons";
import SelectLanguage from "../SelectLanguage";

const Header: FC<IHeader> = ( { pageId } ) => {

    return (
        <HeaderLayout>
            <div className='flex max-w-[1400px] w-full justify-between p-3 items-center'>
                <Logo />
                <nav className='flex items-center gap-5'>
                    { HeaderItems.map(Item => {
                        return (pageId !== Item.id) ? <Link
                            key={Item.name}
                            to={Item.path}
                            className={ `text-gray-800 fill-gray-800 hover:text-blue-600 hover:fill-blue-600 flex items-center gap-1` }
                        >
                            { Item.icon && <Item.icon /> }
                            <p>{Item.name}</p>
                        </Link> : <span key={Item.name} className='text-blue-700 fill-blue-700 cursor-default flex items-center gap-1'>
                            { Item.icon && <Item.icon /> }
                            <p>{Item.name}</p>
                        </span>;
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