import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Loading from "@/components/Loading";
import { INews } from "@/interfaces/News";
import ContainerLayout from "@/layouts/ContainerLayout";
import MainLayout from "@/layouts/MainLayout";
import { formatDate } from "@/modules/date";
import { Icon20ArrowLeftOutline } from "@vkontakte/icons";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate, useParams } from "react-router-dom";

const NewsPage = () => {

    const { t } = useTranslation();
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(true);
    const [news, setNews] = useState<INews>();

    useEffect(() => {
        const formData = new FormData();
        formData.append('type', 'news');
        formData.append('method', 'get');
        formData.append('id', String(id));
        fetch('https://center-competence.choices.kz/api/', {
            method: 'POST',
            body: formData
        }).then(async response => {
            if(response.status === 200) 
                return response.json()    
        }).then(result => {
            if(result !== null) 
                return setNews(result)
            else navigate('/');
        }).finally(() => {
            setLoading(false);
        });
    }, []);

    const deleteNews = async (id: number) => {
        const formData = new FormData();
        formData.append('type', 'news');
        formData.append('method', 'delete');
        formData.append('id', String(id));
        await fetch('https://center-competence.choices.kz/api/', {
            method: 'POST',
            body: formData
        }).finally(() => navigate('/'))
    }

    return (
        <ContainerLayout>
            { loading ? (
                <Loading />
            ) : (
                <>
                    <Header />
                    <MainLayout className='flex-1 flex flex-col items-center p-2'>
                        { (localStorage.getItem('isAuthed')) && <div className='p-2'>
                            <button onClick={() => deleteNews(Number(id))} className='bg-red-500 text-white p-2 rounded-md text-base mt-1'>Удалить новость</button>
                        </div> }
                        <div className="w-full py-4">
                            <Link to={'/'} className='text-gray-700 flex items-center gap-1'>
                                <Icon20ArrowLeftOutline />
                                {t('back')}
                            </Link>
                        </div>
                        { (news?.news_img != '') && <img className='max-w-[800px] w-full' src={'https://center-competence.choices.kz/api/files/' + news?.news_img } /> }
                        <h6 className='max-w-[800px] w-full text-right text-gray-500 text-sm mt-2'>{t('newsCreated')}: {formatDate(news?.created_at)}</h6>
                        <h1 className='text-left font-medium sm:text-3xl text-2xl w-full mt-8'>{news?.news_title}</h1>
                        <p className='text-left w-full text-gray-800'>{news?.news_information}</p>
                    </MainLayout>
                    <Footer />
                </>
            )}
        </ContainerLayout>
    );
};

export default NewsPage;