import HeaderLayout from "@/layouts/HeaderLayout";
import Logo from "@/components/Logo";
import { Link } from "react-router-dom";
import { HeaderItems } from "./header.items"; 
import { FC } from "react";
import { IHeader } from "./header.interface";

const Header: FC<IHeader> = ( { pageId } ) => {

    return (
        <HeaderLayout className='justify-between p-3'>
            <Logo />
            <nav className='flex items-center gap-5 pt-5'>
                { HeaderItems.map(Item => {
                    return (pageId !== Item.id) ? <Link
                        to={Item.path}
                        className={ `text-gray-800 fill-gray-800 hover:text-blue-600 hover:fill-blue-600 flex items-center gap-1` }
                    >
                        { Item.icon && <Item.icon /> }
                        <p>{Item.name}</p>
                    </Link> : <span className='text-blue-700 fill-blue-700 cursor-default flex items-center gap-1'>
                        { Item.icon && <Item.icon /> }
                        <p>{Item.name}</p>
                    </span>;
                }) }
            </nav>
        </HeaderLayout>
    );

};

export default Header;