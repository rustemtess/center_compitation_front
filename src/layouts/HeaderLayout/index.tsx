import { PropsWithChildren, FC, HTMLAttributes } from "react";

interface IHeaderLayout extends HTMLAttributes<HTMLDivElement> {
    className?: string;
}

const HeaderLayout: FC<PropsWithChildren<IHeaderLayout>> = ( { children, className } ) => {

    return (
        <header className={ `sticky top-0 w-full flex justify-center bg-[rgba(255,255,255,0.4)] backdrop-blur-[3px] border border-b-gray-100 ${className}` }>
            {children}
        </header>
    );

};

export default HeaderLayout;