import { useTranslation } from "react-i18next";
import NewsBlock from "./NewsBlock";
import { useEffect, useState } from "react";
import { IAllNews, INews } from "@/interfaces/News";

const News: React.FC<IAllNews> = ({ all = false }) => {

    const { i18n } = useTranslation();
    const [news, setNews] = useState<Array<INews>>([]);

    const getNews = async () => {
        const formData = new FormData();
        formData.append('type', 'news');
        formData.append('method', 'list');
        formData.append('lang', i18n.language.toLowerCase());
        await fetch('https://center-competence.choices.kz/api/', {
            method: 'POST',
            body: formData
        }).then(async response => setNews(await response.json()));
    };

    useEffect(() => {
        getNews();
    }, [i18n.language]);

    return (
        <div className={ `flex ${ all ? 'max-w-[1400px] w-full flex-wrap justify-center' : 'w-[1400px]' } gap-1 overflow-hidden py-2`}>
            { !all ? news.slice(news.length - 4, news.length).reverse().map((currentNews, index) => (
                <NewsBlock key={index} {...currentNews} />
            )) : news.reverse().map((currentNews, index) => (
                <NewsBlock key={index} {...currentNews} />
            ))}
        </div>
    );
};

export default News;
