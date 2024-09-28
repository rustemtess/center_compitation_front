import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      EN: {
        translation: {
            welcome: 'Competence center for psychological and pedagogical training and methodological and technological support for children with special educational needs',
            headerHome: 'Home',
            headerShop: 'Shop',
            headerTeam: 'Team',
            allNews: 'All news',
        }
      },
      RU: {
        translation: {
            welcome: 'Центр компетенций по психолого-педагогической подготовке и методико-технологической поддержке детей с особыми образовательными потребностями',
            headerHome: 'Главная',
            headerShop: 'Магазин',
            headerTeam: 'Команда',
            allNews: 'Все новости',
        }
      },
      KZ: {
        translation: {
            welcome: 'Ерекше білім беру қажеттіліктері бар балаларды психологиялық-педагогикалық даярлау және әдістемелік және технологиялық қолдау жөніндегі құзыреттілік орталығы',
            headerHome: 'Басты',
            headerShop: 'Дүкен',
            headerTeam: 'Команда',
            allNews: 'Барлық жаңалықтар',
        }
      }
    },
    lng: "RU", // язык по умолчанию
    fallbackLng: "RU", // язык, который будет использоваться, если перевод отсутствует
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;