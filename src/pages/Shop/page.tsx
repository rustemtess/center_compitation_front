import Header from "@/components/Header";
import ContainerLayout from "@/layouts/ContainerLayout";
import MainLayout from "@/layouts/MainLayout";
import Shop from '@/assets/img/shop.png';

const ShopPage = () => {

    return (
        <ContainerLayout>
            <Header pageId={2} />
            <MainLayout className='flex flex-col gap-[10em] sm:pt-[8em] pt-[3em] px-4'>
                <div className='w-full flex justify-center items-center p-1 gap-8 flex-wrap'>
                    <img src={Shop} width={380} />
                    <div className='w-full max-w-[800px] flex flex-col gap-3'>
                        <h1 className='text-4xl font-semibold text-gray-700'>Наши продукты — ваша уникальность</h1>
                        <p className='text-xl'>В нашем магазине представлен широкий ассортимент уникальных продуктов для людей всех возрастов. Мы предлагаем инновационные решения и высококачественные товары, которые помогают развивать навыки и удовлетворять разнообразные потребности.</p>
                    </div>
                </div>
            </MainLayout>
        </ContainerLayout>
    );

};

export default ShopPage;