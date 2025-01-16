import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { IService } from "@/interfaces/Services";
import ContainerLayout from "@/layouts/ContainerLayout";
import MainLayout from "@/layouts/MainLayout";
import { formatTextWithParagraphs } from "@/modules/text";
import { Icon20ArrowLeftOutline } from "@vkontakte/icons";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditServicePage = () => {

    const { id } = useParams();
    const [description, setDescription] = useState<string>('');
    const [number, setNumber] = useState<string>('+7');
    const [service, setService] = useState<IService>();
    const navigate = useNavigate();

    useEffect(() => {
        if(!localStorage.getItem('isAuthed')) navigate('/');

        const formData = new FormData();
        formData.append('type', 'services');
        formData.append('method', 'get');
        formData.append('id', String(id));
        fetch('https://center-competence.choices.kz/api/', {
            method: 'POST',
            body: formData
        }).then(async response => setService(await response.json()));
    }, []);

    const editService = (): void => {
        const formData = new FormData();

        formData.append('id', String(id));
        formData.append('type', 'services');
        formData.append('method', 'edit');
        formData.append('description', formatTextWithParagraphs(description));
        formData.append('number', number);
        fetch('https://center-competence.choices.kz/api/', {
            method: 'POST',
            body: formData
        })
        .catch((error) => navigate('/services'))
        .finally(() => navigate('/services'));
    };  

    useEffect(() => {
        if(service) {
            setDescription(service.service_description.replaceAll('<br/>', '\n').replaceAll('<br>', '\n'));
            setNumber(service.service_number);
        }
    }, [service])

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
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} className='outline-none border p-2'></textarea>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span className='text-gray-500 text-sm'>Введите телефон номер продавца</span>
                        <input value={number} onChange={(e) => setNumber(e.target.value)} className='outline-none border p-2' />
                    </div>
                    <button onClick={() => editService()} className='bg-[rgba(0,0,0,0.9)] hover:bg-[rgba(0,0,0,0.8)] text-white p-3'>
                        Изменить услугу
                    </button>
                </div>
            </MainLayout>
            <Footer />
        </ContainerLayout>
    )

}

export default EditServicePage;