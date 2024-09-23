import { IHeaderItem } from "./header.interface";
import { Icon20MarketOutline } from "@vkontakte/icons";

export const HeaderItems: Array<IHeaderItem>  = [
    {
        id: 1,
        name: 'Главная',
        path: '',
    },
    {
        id: 2,
        name: 'Маркет',
        path: 'shop',
        icon: Icon20MarketOutline
    },
    {
        id: 3,
        name: 'Команда',
        path: 'team',
    }
];