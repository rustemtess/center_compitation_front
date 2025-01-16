import Footer from "@/components/Footer";
import Header from "@/components/Header";
import News from "@/components/News";
import ContainerLayout from "@/layouts/ContainerLayout";
import MainLayout from "@/layouts/MainLayout";
import { Icon20ArrowLeftOutline } from "@vkontakte/icons";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const AllNewsPage = () => {

    const { t } = useTranslation();

    return (
        <ContainerLayout>
            <Header />
            <MainLayout className="flex-1 flex flex-col gap-6 justify-center px-2">
                <div className="mt-10">
                    <Link to={'/'} className='text-gray-700 flex items-center gap-1'>
                        <Icon20ArrowLeftOutline />
                        {t('back')}
                    </Link>
                </div>
                <News all={true} />
            </MainLayout>
            <Footer />
        </ContainerLayout>
    );

};

export default AllNewsPage;