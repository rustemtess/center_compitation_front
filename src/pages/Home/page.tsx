import MainLayout from "@/layouts/MainLayout";
import Header from "@/components/Header";
import ContainerLayout from "@/layouts/ContainerLayout";

import Home1 from '@/assets/img/home_1.png';

const HomePage = () => {

    return (
        <ContainerLayout>
            <Header pageId={1} />
            <MainLayout>
                <div className='w-full flex justify-center items-center mt-[6em] p-1 gap-4 flex-wrap'>
                    <h1 className='max-w-[700px] text-4xl text-left font-medium text-[#3c3d51]'>Центр компетенций по психолого-педагогической подготовке и методико-технологической поддержке детей с особыми образовательными потребностями</h1>
                    <img src={Home1} width={400} />
                </div>
            </MainLayout>
        </ContainerLayout>
    );

};

export default HomePage;