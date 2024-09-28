import { FC } from "react";
import { IBlock } from "./block.interface";

const Block: FC<IBlock> = ( { text, Icon } ) => {

    return (
        <div className='shadow p-3 w-full max-w-[400px] h-[inherit] flex justify-around items-center rounded-xl bg-gray-50 flex-wrap'>
            <Icon width={50} height={50} color='#e29b8c' />
            <p className='max-w-[300px] text-wrap p-1.5 text-gray-700'>{ text }</p>
        </div>
    );

};

export default Block;