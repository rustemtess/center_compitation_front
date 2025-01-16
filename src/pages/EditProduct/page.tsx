import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { IProduct } from "@/interfaces/Product";
import ContainerLayout from "@/layouts/ContainerLayout";
import MainLayout from "@/layouts/MainLayout";
import { formatTextWithParagraphs } from "@/modules/text";
import { Icon20ArrowLeftOutline } from "@vkontakte/icons";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditProductPage = () => {

    const { id } = useParams();
    const [title, setTitle] = useState<string>('');
    const [params, setParams] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [kit, setKit] = useState<string>('');
    const [services, setServices] = useState<string>('');
    const [price, setPrice] = useState<string>('0');
    const [number, setNumber] = useState<string>('+7');
    const [videoUrl, setVideoUrl] = useState<string>('');
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(true);
    const [product, setProduct] = useState<IProduct | undefined>();
    
    useEffect(() => {
        if(product) {
            setTitle(product.product_title.replaceAll('<br/>', '\n').replaceAll('<br>', '\n'));
            setDescription(product.product_description.replaceAll('<br/>', '\n').replaceAll('<br>', '\n'));
            setPrice(String(product.product_price));
            setVideoUrl(product.product_video_url);
            setKit(product.product_kit.replaceAll('<br/>', '\n').replaceAll('<br>', '\n'));
            setServices(product.product_services.replaceAll('<br/>', '\n').replaceAll('<br>', '\n'));
            setParams(product.product_params.replaceAll('<br/>', '\n').replaceAll('<br>', '\n'));
            setNumber(product.product_vendor_number);
        }
    }, [product])

    useEffect(() => {
        if(!localStorage.getItem('isAuthed')) navigate('/');

        const formData = new FormData();
        formData.append('type', 'product');
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
                return setProduct(result)
            else navigate('/shop');
        }).finally(() => setLoading(false));
    }, []);

    const editProduct = (): void => {
        const formData = new FormData();
        
        formData.append('id', String(id));
        formData.append('type', 'product');
        formData.append('method', 'edit');
        formData.append('title', title);
        formData.append('params', formatTextWithParagraphs(params));
        formData.append('description', formatTextWithParagraphs(description));
        formData.append('kit', formatTextWithParagraphs(kit));
        formData.append('services', formatTextWithParagraphs(services));
        formData.append('video-url', videoUrl);
        formData.append('price', price);
        formData.append('number', number);
        
        fetch('https://center-competence.choices.kz/api/', {
            method: 'POST',
            body: formData
        })
        .catch((error) => navigate('/shop'))
        .finally(() => navigate('/product/' + id));
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
                        <input value={title} onChange={(e) => setTitle(e.target.value)} className='outline-none border p-2' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span className='text-gray-500 text-sm'>Введите параметры товара</span>
                        <textarea value={params} onChange={(e) => setParams(e.target.value)} className='outline-none border p-2'></textarea>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span className='text-gray-500 text-sm'>Введите информацию о товаре</span>
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} className='outline-none border p-2'></textarea>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span className='text-gray-500 text-sm'>Введите что входит в комплект <span className='text-gray-400 italic'>(По желанию)</span></span>
                        <textarea value={kit} onChange={(e) => setKit(e.target.value)} className='outline-none border p-2'></textarea>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span className='text-gray-500 text-sm'>Введите гарантийное обслуживание <span className='text-gray-400 italic'>(По желанию)</span></span>
                        <textarea value={services} onChange={(e) => setServices(e.target.value)} className='outline-none border p-2'></textarea>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span className='text-gray-500 text-sm'>Вставьте ссылку на видео Youtube</span>
                        <input value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} className='outline-none border p-2' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span className='text-gray-500 text-sm'>Введите цену товара <span className='text-gray-400 italic'>(По желанию)</span></span>
                        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className='outline-none border p-2' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span className='text-gray-500 text-sm'>Введите телефон номер продавца</span>
                        <input value={number} onChange={(e) => setNumber(e.target.value)} className='outline-none border p-2' />
                    </div>
                    <button onClick={() => editProduct()} className='bg-[rgba(0,0,0,0.9)] hover:bg-[rgba(0,0,0,0.8)] text-white p-3'>
                        Изменить товар
                    </button>
                </div>
            </MainLayout>
            <Footer />
        </ContainerLayout>
    )
};

export default EditProductPage;
