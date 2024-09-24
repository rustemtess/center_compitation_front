import { FC, HTMLAttributes, PropsWithChildren } from "react";

interface IMainLayout extends HTMLAttributes<HTMLDivElement> {
    className?: string;
}

const MainLayout: FC<PropsWithChildren<IMainLayout>> = ( { children, className } ) => {

    return (
        <div className={ `max-w-[1400px] h-full w-full ${className}` }>
            {children}
        </div>
    );
        
};

export default MainLayout;