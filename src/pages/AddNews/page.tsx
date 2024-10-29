import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ContainerLayout from "@/layouts/ContainerLayout";
import MainLayout from "@/layouts/MainLayout";
import { formatTextWithParagraphs } from "@/modules/text";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Icon20ArrowLeftOutline } from "@vkontakte/icons";

const AddNewsPage = () => {

    const [title, setTitle] = useState<string>('');
    const [information, setInformation] = useState<string>('');
    const [lang, setLang] = useState<string>('ru');
    const navigate = useNavigate();

    useEffect(() => {
        if(!localStorage.getItem('isAuthed')) navigate('/');
    }, []);

    const createNews = (): void => {
        const formData = new FormData();
        const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
    
        if (fileInput && fileInput.files && fileInput.files.length > 0) {
            formData.append('file', fileInput.files[0]); // 'file' — ключ для файла на сервере
        }
        formData.append('type', 'news');
        formData.append('method', 'add');
        formData.append('title', title);
        formData.append('information', formatTextWithParagraphs(information));
        formData.append('lang', lang);
        fetch('https://center-competence.choices.kz/api/', {
            method: 'POST',
            body: formData
        })
        .catch((error) => console.error('Ошибка:', error))
        .finally(() => navigate('/'));
    };  

    return (
        <ContainerLayout>
            <Header pageId={6} />
            <MainLayout className='flex-1 flex flex-col items-center'>
                <div className='flex flex-col gap-6 max-w-[800px] w-full mt-10'>
                    <div>
                        <Link to={'/'} className='text-gray-700 flex items-center gap-1'>
                            <Icon20ArrowLeftOutline />
                            Назад
                        </Link>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span className='text-gray-500 text-sm'>Введите заголовок</span>
                        <input onChange={(e) => setTitle(e.target.value)} className='outline-none border p-2' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span className='text-gray-500 text-sm'>Введите информацию</span>
                        <textarea onChange={(e) => setInformation(e.target.value)} className='outline-none border p-2'></textarea>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span className='text-gray-500 text-sm'>Загрузите картинку</span>
                        <input type='file' className='outline-none border p-2' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span className='text-gray-500 text-sm'>Выберите язык</span>
                        <select onChange={(e) => setLang(e.target.value)} className='outline-none border p-2'>
                            <option value={'ru'}>Русский</option>
                            <option value={'kz'}>Казахский</option>
                            <option value={'en'}>Английский</option>
                        </select>
                    </div>
                    <button onClick={() => createNews()} className='bg-[rgba(0,0,0,0.9)] hover:bg-[rgba(0,0,0,0.8)] text-white p-3'>
                        Выложить новость
                    </button>
                </div>
            </MainLayout>
            <Footer />
        </ContainerLayout>
    )
};

export default AddNewsPage;