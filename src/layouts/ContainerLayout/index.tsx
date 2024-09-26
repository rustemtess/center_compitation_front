import { FC, HTMLAttributes, PropsWithChildren } from "react";

interface IContainerLayout extends HTMLAttributes<HTMLDivElement> {
    className?: string;
}

const ContainerLayout: FC<PropsWithChildren<IContainerLayout>> = ( { children, className } ) => {

    return (
        <div className={ `w-full min-h-svh flex flex-col items-center ${className}` }>
            { children }
        </div>
    );
        
};

export default ContainerLayout;