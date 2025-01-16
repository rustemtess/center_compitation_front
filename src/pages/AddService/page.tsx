import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ContainerLayout from "@/layouts/ContainerLayout";
import MainLayout from "@/layouts/MainLayout";
import { formatTextWithParagraphs } from "@/modules/text";
import { Icon20ArrowLeftOutline } from "@vkontakte/icons";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddServicePage = () => {

    const [description, setDescription] = useState<string>('');
    const [number, setNumber] = useState<string>('+7');
    const [lang, setLang] = useState<string>('ru');
    const navigate = useNavigate();

    useEffect(() => {
        if(!localStorage.getItem('isAuthed')) navigate('/');
    }, []);

    const createService = (): void => {
        const formData = new FormData();
        const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
    
        if (fileInput && fileInput.files && fileInput.files.length > 0) {
            for (let i = 0; i < fileInput.files.length; i++) {
                formData.append('files[]', fileInput.files[i]); // 'files[]' is the key for multiple files
            }
        }

        formData.append('type', 'services');
        formData.append('method', 'add');
        formData.append('description', formatTextWithParagraphs(description));
        formData.append('number', number);
        formData.append('lang', lang);
        fetch('https://center-competence.choices.kz/api/', {
            method: 'POST',
            body: formData
        })
        .catch((error) => console.error('Ошибка:', error))
        .finally(() => navigate('/services'));
    };  

    return (
        <ContainerLayout>
            <Header pageId={7} />
            <MainLayout className='flex-1 flex flex-col items-center'>
                <div className='flex flex-col gap-6 max-w-[800px] w-full mt-10'>
                    <div>
                        <Link to={'/'} className='text-gray-700 flex items-center gap-1'>
                            <Icon20ArrowLeftOutline />
                            Назад
                        </Link>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span className='text-gray-500 text-sm'>Введите описание</span>
                        <textarea onChange={(e) => setDescription(e.target.value)} className='outline-none border p-2'></textarea>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span className='text-gray-500 text-sm'>Введите телефон номер продавца</span>
                        <input value={number} onChange={(e) => setNumber(e.target.value)} className='outline-none border p-2' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span className='text-gray-500 text-sm'>Загрузите картинку</span>
                        <input type='file' multiple accept='image/*' className='outline-none border p-2' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span className='text-gray-500 text-sm'>Выберите язык</span>
                        <select onChange={(e) => setLang(e.target.value)} className='outline-none border p-2'>
                            <option value={'ru'}>Русский</option>
                            <option value={'kz'}>Казахский</option>
                            <option value={'en'}>Английский</option>
                        </select>
                    </div>
                    <button onClick={() => createService()} className='bg-[rgba(0,0,0,0.9)] hover:bg-[rgba(0,0,0,0.8)] text-white p-3'>
                        Добавить услугу
                    </button>
                </div>
            </MainLayout>
            <Footer />
        </ContainerLayout>
    )

}

export default AddServicePage;