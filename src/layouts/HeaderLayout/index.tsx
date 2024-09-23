import { PropsWithChildren, FC, HTMLAttributes } from "react";

interface IHeaderLayout extends HTMLAttributes<HTMLDivElement> {
    className?: string;
}

const HeaderLayout: FC<PropsWithChildren<IHeaderLayout>> = ( { children, className } ) => {

    return (
        <header className={ `flex items-start ${className}` }>
            {children}
        </header>
    );

};

export default HeaderLayout;