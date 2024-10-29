import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ContainerLayout from "@/layouts/ContainerLayout";
import MainLayout from "@/layouts/MainLayout";
import { useTranslation } from "react-i18next";

const TeamPage = () => {

    const { t } = useTranslation();

    return (
        <ContainerLayout>
            <Header pageId={4} />
            <MainLayout className='flex-1'>
            <div className='py-24'>
                <div className='mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3'>
                    <div className='max-w-2xl'>
                    <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>{t('teamTitle')}</h2>
                    <p className='mt-4 text-lg leading-8 text-gray-600'>{t('teamInfo')}</p>
                    </div>
                    <ul role='list' className='grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2'>
                    <li>
                        <div className='flex items-center gap-x-6'>
                            <div>
                                <h3 className='text-base font-semibold leading-7 tracking-tight text-gray-900'>{t('teamUser1FN')}</h3>
                                <p className='text-sm font-semibold leading-6 text-blue-600'>{t('teamUser1Spec')}</p>
                                <h4 className='text-slate-600 text-sm'>{t('teamUser1Info')}</h4>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='flex items-center gap-x-6'>
                            <div>
                                <h3 className='text-base font-semibold leading-7 tracking-tight text-gray-900'>{t('teamUser2FN')}</h3>
                                <p className='text-sm font-semibold leading-6 text-blue-600'>{t('teamUser2Spec')}</p>
                                <h4 className='text-slate-600 text-sm'>{t('teamUser2Info')}</h4>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='flex items-center gap-x-6'>
                            <div>
                                <h3 className='text-base font-semibold leading-7 tracking-tight text-gray-900'>{t('teamUser3FN')}</h3>
                                <p className='text-sm font-semibold leading-6 text-blue-600'>{t('teamUser3Spec')}</p>
                                <h4 className='text-slate-600 text-sm'>{t('teamUser3Info')}</h4>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='flex items-center gap-x-6'>
                            <div>
                                <h3 className='text-base font-semibold leading-7 tracking-tight text-gray-900'>{t('teamUser4FN')}</h3>
                                <p className='text-sm font-semibold leading-6 text-blue-600'>{t('teamUser4Spec')}</p>
                                <h4 className='text-slate-600 text-sm'>{t('teamUser4Info')}</h4>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='flex items-center gap-x-6'>
                            <div>
                                <h3 className='text-base font-semibold leading-7 tracking-tight text-gray-900'>{t('teamUser5FN')}</h3>
                                <p className='text-sm font-semibold leading-6 text-blue-600'>{t('teamUser5Spec')}</p>
                                <h4 className='text-slate-600 text-sm'>{t('teamUser5Info')}</h4>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='flex items-center gap-x-6'>
                            <div>
                                <h3 className='text-base font-semibold leading-7 tracking-tight text-gray-900'>{t('teamUser6FN')}</h3>
                                <p className='text-sm font-semibold leading-6 text-blue-600'>{t('teamUser6Spec')}</p>
                                <h4 className='text-slate-600 text-sm'>{t('teamUser6Info')}</h4>
                            </div>
                        </div>
                    </li>
                    </ul>
                </div>
                </div>
            </MainLayout>
            <Footer />
        </ContainerLayout>
    );

};

export default TeamPage;