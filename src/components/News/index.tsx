import { useTranslation } from "react-i18next";
import NewsBlock from "./NewsBlock";
import { useEffect, useState } from "react";
import { INews } from "@/interfaces/News";

const News = () => {

    const { i18n } = useTranslation();
    const [news, setNews] = useState<Array<INews>>();

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
        <div className='flex w-[1400px] gap-1 overflow-hidden py-2'>
            { news && news.map(currentNews => ( <NewsBlock {...currentNews} /> ) ) }
        </div>
    );

};

export default News;