import { PropsWithChildren, FC, HTMLAttributes } from "react";

interface IHeaderLayout extends HTMLAttributes<HTMLDivElement> {
    className?: string;
}

const HeaderLayout: FC<PropsWithChildren<IHeaderLayout>> = ( { children, className } ) => {

    return (
        <header className={ `z-50 sticky top-0 w-full flex justify-center ${className}` }>
            {children}
        </header>
    );

};

export default HeaderLayout;