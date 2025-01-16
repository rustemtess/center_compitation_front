import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ContainerLayout from "@/layouts/ContainerLayout";
import MainLayout from "@/layouts/MainLayout";
import { formatTextWithParagraphs } from "@/modules/text";
import { Icon20ArrowLeftOutline } from "@vkontakte/icons";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddProductPage = () => {

    const [title, setTitle] = useState<string>('');
    const [params, setParams] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [kit, setKit] = useState<string>('');
    const [services, setServices] = useState<string>('');
    const [price, setPrice] = useState<string>('0');
    const [number, setNumber] = useState<string>('+7');
    const [lang, setLang] = useState<string>('ru');
    const [videoUrl, setVideoUrl] = useState<string>('');
    const navigate = useNavigate();

    useEffect(() => {
        if(!localStorage.getItem('isAuthed')) navigate('/');
    }, []);

    const createProduct = (): void => {
        const formData = new FormData();
        const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
    
        if (fileInput && fileInput.files && fileInput.files.length > 0) {
            for (let i = 0; i < fileInput.files.length; i++) {
                formData.append('files[]', fileInput.files[i]); // 'files[]' is the key for multiple files
            }
        }
        
        formData.append('type', 'product');
        formData.append('method', 'add');
        formData.append('title', title);
        formData.append('params', formatTextWithParagraphs(params));
        formData.append('description', formatTextWithParagraphs(description));
        formData.append('kit', formatTextWithParagraphs(kit));
        formData.append('services', formatTextWithParagraphs(services));
        formData.append('video-url', videoUrl);
        formData.append('price', price);
        formData.append('number', number);
        formData.append('lang', lang);
        
        fetch('https://center-competence.choices.kz/api/', {
            method: 'POST',
            body: formData
        })
        .catch((error) => console.error('Ошибка:', error))
        .finally(() => navigate('/shop'));
    };  

    return (
        <ContainerLayout>
            <Header pageId={5} />
            <MainLayout className='flex-1 flex flex-col items-center'>
                <div className='flex flex-col gap-6 max-w-[800px] w-full mt-10'>
                    <div>
                        <Link to={'/shop'} className='text-gray-700 flex items-center gap-1'>
                            <Icon20ArrowLeftOutline />
                            Назад
                        </Link>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span className='text-gray-500 text-sm'>Введите название товара</span>
                        <input onChange={(e) => setTitle(e.target.value)} className='outline-none border p-2' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span className='text-gray-500 text-sm'>Введите параметры товара</span>
                        <textarea onChange={(e) => setParams(e.target.value)} className='outline-none border p-2'></textarea>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span className='text-gray-500 text-sm'>Введите информацию о товаре</span>
                        <textarea onChange={(e) => setDescription(e.target.value)} className='outline-none border p-2'></textarea>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span className='text-gray-500 text-sm'>Введите что входит в комплект <span className='text-gray-400 italic'>(По желанию)</span></span>
                        <textarea onChange={(e) => setKit(e.target.value)} className='outline-none border p-2'></textarea>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span className='text-gray-500 text-sm'>Введите гарантийное обслуживание <span className='text-gray-400 italic'>(По желанию)</span></span>
                        <textarea onChange={(e) => setServices(e.target.value)} className='outline-none border p-2'></textarea>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span className='text-gray-500 text-sm'>Вставьте ссылку на видео Youtube</span>
                        <input onChange={(e) => setVideoUrl(e.target.value)} className='outline-none border p-2' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span className='text-gray-500 text-sm'>Введите цену товара <span className='text-gray-400 italic'>(По желанию)</span></span>
                        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className='outline-none border p-2' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span className='text-gray-500 text-sm'>Загрузите картинки товара</span>
                        <input type='file' multiple className='outline-none border p-2' accept='image/*' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span className='text-gray-500 text-sm'>Введите телефон номер продавца</span>
                        <input value={number} onChange={(e) => setNumber(e.target.value)} className='outline-none border p-2' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span className='text-gray-500 text-sm'>Выберите язык</span>
                        <select onChange={(e) => setLang(e.target.value)} className='outline-none border p-2'>
                            <option value={'ru'}>Русский</option>
                            <option value={'kz'}>Казахский</option>
                            <option value={'en'}>Английский</option>
                        </select>
                    </div>
                    <button onClick={() => createProduct()} className='bg-[rgba(0,0,0,0.9)] hover:bg-[rgba(0,0,0,0.8)] text-white p-3'>
                        Создать товар
                    </button>
                </div>
            </MainLayout>
            <Footer />
        </ContainerLayout>
    )
};

export default AddProductPage;
