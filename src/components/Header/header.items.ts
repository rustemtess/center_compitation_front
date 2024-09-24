import { IHeaderItem } from "./header.interface";
import { 
    Icon20MarketOutline,
    Icon20Users3Outline,
    Icon20HomeOutline
} from "@vkontakte/icons";

export const HeaderItems: Array<IHeaderItem>  = [
    {
        id: 1,
        name: 'Главная',
        path: '',
        icon: Icon20HomeOutline
    },
    {
        id: 2,
        name: 'Магазин',
        path: 'shop',
        icon: Icon20MarketOutline
    },
    {
        id: 3,
        name: 'Команда',
        path: 'team',
        icon: Icon20Users3Outline
    }
];