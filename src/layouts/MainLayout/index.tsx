import { FC, HTMLAttributes, PropsWithChildren } from "react";

interface IMainLayout extends HTMLAttributes<HTMLDivElement> {
    className?: string;
}

const MainLayout: FC<PropsWithChildren<IMainLayout>> = ( { children, className } ) => {

    return (
        <div className='w-full h-full flex flex-col items-center'>
            <div className={ `max-w-[1400px] min-h-svh w-full ${className}` }>
                {children}
            </div>
        </div>
    );
        
};

export default MainLayout;