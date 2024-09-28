import Header from "@/components/Header";
import ContainerLayout from "@/layouts/ContainerLayout";
import MainLayout from "@/layouts/MainLayout";

const TeamPage = () => {

    return (
        <ContainerLayout>
            <Header pageId={3} />
            <MainLayout>
            <div className='py-24'>
                <div className='mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3'>
                    <div className='max-w-2xl'>
                    <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Наша команда</h2>
                    <p className='mt-4 text-lg leading-8 text-gray-600'>Состав рабочей группы по проекту</p>
                    </div>
                    <ul role='list' className='grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2'>
                    <li>
                        <div className='flex items-center gap-x-6'>
                            <div>
                                <h3 className='text-base font-semibold leading-7 tracking-tight text-gray-900'>Ерболатулы Досым</h3>
                                <p className='text-sm font-semibold leading-6 text-blue-600'>Руководитель проекта</p>
                                <h4 className='text-slate-600 text-sm'>К.ф.-м.н., профессор кафедры физики и технологий</h4>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='flex items-center gap-x-6'>
                            <div>
                                <h3 className='text-base font-semibold leading-7 tracking-tight text-gray-900'>Ауренова Мадина Даулеткановна</h3>
                                <p className='text-sm font-semibold leading-6 text-blue-600'>Специалист по коммерциализации</p>
                                <h4 className='text-slate-600 text-sm'>К.пс.н., ассоциированный профессор кафедры психологии и коррекционной педагогики</h4>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='flex items-center gap-x-6'>
                            <div>
                                <h3 className='text-base font-semibold leading-7 tracking-tight text-gray-900'>Алипова Алима Кабдульашимовна</h3>
                                <p className='text-sm font-semibold leading-6 text-blue-600'>Главный менеджер</p>
                                <h4 className='text-slate-600 text-sm'>Руководитель ЦниИО «Dana bala», сениор-лектор кафедры экономики, менеджмента и финансов</h4>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='flex items-center gap-x-6'>
                            <div>
                                <h3 className='text-base font-semibold leading-7 tracking-tight text-gray-900'>Баичинов Рауан Толеуханович</h3>
                                <p className='text-sm font-semibold leading-6 text-blue-600'>Специалист-дефектолог</p>
                                <h4 className='text-slate-600 text-sm'>Лектор кафедры психологии и коррекционной педагогики</h4>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='flex items-center gap-x-6'>
                            <div>
                                <h3 className='text-base font-semibold leading-7 tracking-tight text-gray-900'>Адиканова Салтанат</h3>
                                <p className='text-sm font-semibold leading-6 text-blue-600'>Ведущий менеджер</p>
                                <h4 className='text-slate-600 text-sm'>Доктор PhD, декан высшей школы IT и естественных наук</h4>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='flex items-center gap-x-6'>
                            <div>
                                <h3 className='text-base font-semibold leading-7 tracking-tight text-gray-900'>Жакупова Сауле Женискановна</h3>
                                <p className='text-sm font-semibold leading-6 text-blue-600'>Бухгалтер</p>
                                <h4 className='text-slate-600 text-sm'>Заместитель главного бухгалтера, магистр экономики</h4>
                            </div>
                        </div>
                    </li>
                    </ul>
                </div>
                </div>
            </MainLayout>
        </ContainerLayout>
    );

};

export default TeamPage;