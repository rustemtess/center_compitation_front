import { INews } from "@/interfaces/News";
import { formatDate } from "@/modules/date";
import { Link } from "react-router-dom";

const NewsBlock = ({ news_id, news_title, news_img = '', created_at }: INews) => {
    return (
        <Link 
            to={`/news/${news_id}`} 
            className="cursor-pointer relative w-[400px] h-[250px] overflow-hidden"
        >
            {/* Изображение продукта */}
            <img 
                src={`https://center-competence.choices.kz/api/files/${news_img}`}  
                className="w-full h-full object-cover" 
            />

            {/* Темный прозрачный слой через псевдоэлемент */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            
            {/* Текстовые блоки поверх изображения */}
            <div className="absolute bottom-0 text-white z-10 p-4">
                <h1 className='font-bold truncate line-clamp-4 hover:underline'>{news_title}</h1>
                <p className='font-medium text-sm text-gray-200 mt-2'>{formatDate(String(created_at))}</p>
            </div>
        </Link>
    );
};

export default NewsBlock;
