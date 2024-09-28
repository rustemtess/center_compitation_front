import MainLayout from "@/layouts/MainLayout";
import Header from "@/components/Header";
import ContainerLayout from "@/layouts/ContainerLayout";
import Home1 from '@/assets/img/home_1.png';
import Home2 from '@/assets/img/home_2.png';
import Home3 from '@/assets/img/home_3.png';
import Home4 from '@/assets/img/home_4.png';
import { 
    Icon16ArrowRightOutline,
    Icon20CoinsOutline,
    Icon28ChevronRightCircle,
    Icon28VoiceOutline,
    Icon28BrainOutline,
    Icon28SchoolOutline,
    Icon28SunOutline,
    Icon28DocumentOutline,
    Icon28UserMicrophoneBadgeOutline,
    Icon24ArmchairOutline,
    Icon28HandHeartOutline,
    Icon28GameOutline,
    Icon28HeartCircleOutline,
    Icon24MagicWandOutline,
    Icon28HorseToyOutline,
    Icon28EducationOutline,
    Icon28GlobeOutline,
    Icon24HomeHeartOutline,
    Icon28BookSpreadOutline
} from "@vkontakte/icons";
import Block from "@/components/Block";
import { useTranslation } from "react-i18next";

const HomePage = () => {

    const { t } = useTranslation();

    return (
        <ContainerLayout>
            <Header pageId={1} />
            <MainLayout className='flex flex-col gap-[10em] sm:pt-[8em] pt-[3em] px-4'>
                <div className='w-full flex justify-center items-center p-1 gap-4 flex-wrap'>
                    <h1 className='max-w-[700px] sm:text-4xl text-2xl text-left font-medium text-[#3c3d51]'>{t('welcome')}</h1>
                    <img src={Home1} className='sm:w-[400px] w-[300px]' />
                </div>
                { /** News block */ }
                <div className='w-full'>
                    <div className='relative w-full'>
                        <hr className='w-full' />
                        <h1 className='absolute left-1/2 transform -translate-x-1/2 text-gray-800 mt-[-0.8em] text-2xl bg-[var(--background--)] w-fit px-4'>{t('allNews')}</h1>
                    </div>
                    <div>
                        
                    </div>
                </div>
                { /** Information */ }
                <div className='w-full flex justify-center items-center p-1 gap-8 flex-wrap'>
                    <div className='w-full max-w-[800px] flex flex-col gap-4'>
                        <h1 className='text-4xl font-semibold text-gray-700'>О проекте</h1>
                        <p className='text-base flex flex-col gap-2'>
                            <span>Грантодатель — <b>АО «Фонд науки»</b></span>
                            <span>Заявитель и грантополучатель — <b>НАО «Восточно-Казахстанский университет имени Сарсена Аманжолова»</b></span>
                            <span>Частный партнер — <b>ОО «Центр реабилитации и коррекции DEMEY»</b></span>
                            <span>Руководитель проекта — <b>Ерболатұлы Досым к.ф.-м.н., профессор кафедры физики и технологий, член-корреспондент Национальной инженерной академии РК</b></span>
                            <span>Сроки реализации: <b>06.12.2023г — 31.12.2025г.</b></span>
                        </p>
                    </div>
                    <img src={Home4} className='sm:w-[380px] w-[280px]' />
                </div>
                { /** Our goal */ }
                <div className='w-full flex justify-center items-center p-1 gap-8 flex-wrap-reverse'>
                    <img src={Home2} className='sm:w-[280px] w-[200px]' />
                    <div className='w-full max-w-[800px] flex flex-col gap-3'>
                        <h1 className='text-4xl font-semibold text-gray-700'>Цель проекта</h1>
                        <p className='text-xl'>Разработка комплексных методик и технических средств по развитию и реабилитации детей с особыми образовательными потребностями на основе научного подхода и практического опыта работы с учетом возраста, физиологических характеристик и особенностей родного языка.</p>
                        <button className='flex items-center sm:gap-2 gap-4 p-2 w-fit rounded-md'>
                            <Icon16ArrowRightOutline width={20} height={20} color='orange' />
                            <p className='font-medium text-gray-800 text-left'>Перейти к реализации проекта</p>
                        </button>
                    </div>
                </div>
                { /** Finance */ }
                <div className='flex flex-col'>
                    <div className='flex justify-center items-center gap-2'>
                        <Icon20CoinsOutline width={60} height={60} color='rgb(250, 204, 21)' />
                        <h1 className='text-2xl font-semibold text-gray-700 text-center'>Сумма финансирования</h1>
                    </div>
                    <h3 className='text-center text-xl mt-3'>100 000 тыс. тенге на весь срок реализации проекта</h3>
                    <div className='flex flex-wrap justify-center gap-10 mt-[3em]'>
                        <div className='border shadow-xl p-3 rounded-2xl w-[300px] h-[150px] flex flex-col justify-center items-center gap-2'>
                            <h1 className='text-5xl text-gray-800 font-semibold'>25 000₸</h1>
                            <h2 className='text-xl text-gray-600'>на 2023 год</h2>
                        </div>
                        <div className='border shadow-xl p-3 rounded-2xl w-[300px] h-[150px] flex flex-col justify-center items-center gap-2'>
                            <h1 className='text-5xl text-gray-800 font-semibold'>60 000₸</h1>
                            <h2 className='text-xl text-gray-600'>на 2024 год</h2>
                        </div>
                        <div className='border shadow-xl p-3 rounded-2xl w-[300px] h-[150px] flex flex-col justify-center items-center gap-2'>
                            <h1 className='text-5xl text-gray-800 font-bold'>15 000₸</h1>
                            <h2 className='text-xl text-gray-600'>на 2025 год</h2>
                        </div>
                    </div>
                </div>
                { /** Result */ }
                <div className='w-full flex justify-center items-center p-1 sm:gap-8 gap-2 flex-wrap'>
                    <div className='w-full max-w-[800px] flex flex-col gap-3'>
                        <h1 className='text-4xl font-semibold text-gray-700'>В рамках проекта планируется реализация</h1>
                        <p className='text-xl'>Комплексные методики, услуги, технические средства и развивающие программы для специальной психолого-педагогической подготовки, коррекции и методико-технологической поддержки детей, в том числе с особыми образовательными потребностями, такие как:</p>
                        <button className='flex items-center gap-2 p-2 w-fit rounded-md'>
                            <Icon28ChevronRightCircle width={24} height={24} color='blue' />
                            <p className='font-medium text-gray-800'>Продолжить</p>
                        </button>
                    </div>
                    <img src={Home3} width={380} className='sm:w-[380px] w-[280px]' />
                </div>
                { /** Blocks */ }
                <div className='flex flex-wrap gap-4 justify-center'>
                    <Block 
                        text='Комплекс методических пособий для детей дошкольного возраста с общим недоразвитием речи и задержкой психического развития' 
                        Icon={Icon28BookSpreadOutline} />
                    <Block 
                        text='Комплексная методика для изучения интонационных структур голоса у казахоязычных детей с кохлеарным имлантом' 
                        Icon={Icon28VoiceOutline} />
                    <Block 
                        text='Курсы и мастер-классы для повышения квалификации педагогов, включая специалистов инклюзивного образования' 
                        Icon={Icon28EducationOutline} />
                    <Block 
                        text='Комплексная методика и услуги коррекции и развития детей с нарушением опорно-двигательного аппарата (ОДА)' 
                        Icon={Icon28HeartCircleOutline} />
                    <Block 
                        text='Комплексная программа психолого-педагогической диагностики и консультирования' 
                        Icon={Icon28BrainOutline} />
                    <Block 
                        text='Стулья-трансформеры, кровати для детей с нарушением ОДА, экзоскелеты для ног' 
                        Icon={Icon24MagicWandOutline} />
                    <Block 
                        text='Организация Школы психолого-педагогической поддержки семей детей с ООП' 
                        Icon={Icon24HomeHeartOutline} />
                    <Block 
                        text='Дистанционный курс для детей с особыми образовательными потребностями' 
                        Icon={Icon28GlobeOutline} />
                    <Block 
                        text='Кресла-вертикализаторы-трансформеры для детей с нарушением ОДА' 
                        Icon={Icon24ArmchairOutline} />
                    <Block 
                        text='Логопедический альбом по коррекции звукопроизношения' 
                        Icon={Icon28UserMicrophoneBadgeOutline} />
                    <Block 
                        text='Комплекс методических пособий для детей с заиканием' 
                        Icon={Icon28DocumentOutline} />
                    <Block 
                        text='Интерактивные логопедические и обучающие тренажеры' 
                        Icon={Icon28GameOutline} />
                    <Block 
                        text='Программа комплексного логопедического массажа' 
                        Icon={Icon28HandHeartOutline} />
                    <Block 
                        text='Интенсивный курс подготовки детей к школе' 
                        Icon={Icon28SchoolOutline} />
                     <Block 
                        text='Развивающие игрушки и принадлежности' 
                        Icon={Icon28HorseToyOutline} />
                    <Block 
                        text='Программа «Каникулярная школа»' 
                        Icon={Icon28SunOutline} />
                </div>
            </MainLayout>
        </ContainerLayout>
    );

};

export default HomePage;