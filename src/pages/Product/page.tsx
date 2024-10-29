import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ContainerLayout from "@/layouts/ContainerLayout";
import MainLayout from "@/layouts/MainLayout";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IProduct } from "@/interfaces/Product";
import { useEffect, useState } from "react";
import { Icon20ArrowLeftOutline, Icon24Cancel, Icon24PhoneOutline } from "@vkontakte/icons";
import { formatMoney } from "@/modules/money";
import { useTranslation } from "react-i18next";

const ProductPage = () => {

    const { t } = useTranslation();
    const { id } = useParams();
    const [product, setProduct] = useState<IProduct | undefined>();
    const navigate = useNavigate();

    type Section = 'description' | 'params' | 'kit' | 'services';
    const [showDescription, setShowDescription] = useState<boolean>(false);
    const [showParams, setShowParams] = useState<boolean>(true);
    const [showKit, setShowKit] = useState<boolean>(false);
    const [showServices, setShowServices] = useState<boolean>(false);

    const toggleSection = (section: Section) => {
        setShowDescription(section === 'description');
        setShowParams(section === 'params');
        setShowKit(section === 'kit');
        setShowServices(section === 'services');
    }

    useEffect(() => {
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
        });
    }, []);

    const [isCallForm, setIsCallForm] = useState<boolean>(false);

    const CallForm = () => {
        return (
            <div className='z-90 fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.3)] flex items-center justify-center'>
                <div className='bg-white max-w-[450px] w-full h-fit py-6 px-4 rounded-md'>
                    <div className='flex justify-between items-center'>
                        <p className='text-gray-600'>{t('shopProductPopupTitle')}</p>
                        <button onClick={() => setIsCallForm(false)}>
                            <Icon24Cancel color="rgba(0,0,0,0.8)" />
                        </button>
                    </div>
                    <hr className='my-3' />
                    <div className='flex flex-col gap-4'>
                        <p>
                            {t('shopProductPopupInfo')} <span className='bg-gray-100 p-1 px-2 rounded'>+{product?.product_vendor_number}</span>
                        </p>
                        <div className='flex gap-2'>
                            <a href={'https://wa.me/' + product?.product_vendor_number} target="_blank" className='flex items-center gap-1 bg-green-500 p-2 px-2 text-white rounded-md'>
                                <Icon24PhoneOutline color="white" />
                                <p>{t('shopProductPopupWhatsapp')}</p>
                            </a>
                            <a href={'tel:+' + product?.product_vendor_number} className='flex items-center gap-1 bg-black p-2 px-3 text-white rounded-md'>
                                <Icon24PhoneOutline color="white" />
                                <p>{t('shopProductPopupCall')}</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <ContainerLayout>
            { isCallForm && <CallForm /> }
            <Header />
            <MainLayout className='flex flex-col justify-center items-center gap-20 sm:py-8 gap-y-3 px-2'>
                <div className="w-full py-4">
                    <Link to={'/shop'} className='text-gray-700 flex items-center gap-1'>
                        <Icon20ArrowLeftOutline />
                        Назад
                    </Link>
                </div>
                <div className='flex flex-wrap gap-5 justify-evenly items-center w-full gap-y-6\4 bg-white max-w-[1000px] rounded-lg p-3 border'>
                    <div className='flex flex-wrap items-center justify-evenly gap-y-8 w-full'>
                        <img width={300} src={'https://center-competence.choices.kz/api/files/' + product?.product_img} />
                        <div className='flex flex-wrap justify-center items-start'>
                            <div className='flex flex-col max-w-[400px] w-full gap-2 p-3'>
                                <div>
                                    <span className='text-gray-500 text-sm'>{t('shopProductDescTitle')}</span>
                                    <h1 className='text-3xl font-medium'>{product?.product_title}</h1>
                                </div>
                                {
                                    (product?.product_price != 0) ? 
                                        <div>
                                            <span className='text-gray-500 text-sm'>{t('shopProductDescPrice')}</span>
                                            <h1 className='text-xl font-semibold'>{formatMoney(Number(product?.product_price))} ₸</h1>
                                        </div> : null
                                }
                                <div className='flex flex-col gap-2 mt-2'>
                                    <h5 className='bg-orange-200 text-orange-900 p-2 text-sm rounded-md w-full text-center'>{t('shopProductDescInfo')}</h5>
                                    <button onClick={() => setIsCallForm(true)} className='bg-[rgba(0,0,0,0.9)] hover:bg-[rgba(0,0,0,0.8)] text-white p-3 rounded-lg'>
                                        {t('shopProductOrder')}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='p-8 flex flex-col gap-3 w-full'>
                        <nav className='flex flex-wrap items-center gap-4 text-blue-600'>
                            <button onClick={() => toggleSection('params')} className={ `p-2 rounded py-1.5 hover:text-gray-800 ${ showParams && 'bg-gray-200 text-gray-800' }` }>
                                {t('shopProductInfoParams')}
                            </button>
                            <button onClick={() => toggleSection('description')} className={ `p-2 rounded py-1.5 hover:text-gray-800 ${ showDescription && 'bg-gray-200 text-gray-800' }` }>
                                {t('shopProductInfoDescription')}
                            </button>
                            <button onClick={() => toggleSection('kit')} className={ `p-2 rounded py-1.5 hover:text-gray-800 ${ showKit && 'bg-gray-200 text-gray-800' }` }>
                                {t('shopProductInfoKit')}
                            </button>
                            <button onClick={() => toggleSection('services')} className={ `p-2 rounded py-1.5 hover:text-gray-800 ${ showServices && 'bg-gray-200 text-gray-800' }` }>
                                {t('shopProductInfoServices')}
                            </button>
                        </nav>
                        <div>
                            { (showParams) ? (product?.product_params === '') ? <h1 className='italic text-gray-500'>Пусто</h1> : <h1 className='text-base' dangerouslySetInnerHTML={{ __html: String(product?.product_params) }}></h1> : null }
                            { (showDescription) ? (product?.product_description === '') ? <h1 className='italic text-gray-500'>Пусто</h1> : <h1 className='text-base' dangerouslySetInnerHTML={{ __html: String(product?.product_description) }}></h1> : null }
                            { (showKit) ? (product?.product_kit === '') ? <h1 className='italic text-gray-500'>Пусто</h1> : <h1 className='text-base' dangerouslySetInnerHTML={{ __html: String(product?.product_kit) }}></h1> : null }
                            { (showServices) ? (product?.product_services === '') ? <h1 className='italic text-gray-500'>Пусто</h1> : <h1 className='text-base' dangerouslySetInnerHTML={{ __html: String(product?.product_services) }}></h1> : null }    
                        </div>
                    </div>
                </div>
            </MainLayout>
            <Footer />
        </ContainerLayout>
    );

};

export default ProductPage;