import { IHeaderItem } from "./header.interface";
import {
  Icon20MarketOutline,
  Icon20Users3Outline,
  Icon20HomeOutline,
  Icon20SquareStackUpOutline,
  Icon20DoorEnterArrowRightOutline,
} from "@vkontakte/icons";

export const HeaderItems: Array<IHeaderItem> = [
  {
    id: 1,
    name: "headerHome",
    path: "",
    icon: Icon20HomeOutline,
  },
  {
    id: 2,
    name: "headerServices",
    path: "services",
    icon: Icon20SquareStackUpOutline,
  },
  {
    id: 3,
    name: "headerShop",
    path: "shop",
    icon: Icon20MarketOutline,
  },
  {
    id: 4,
    name: "headerTeam",
    path: "team",
    icon: Icon20Users3Outline,
  },
  {
    id: 5,
    name: "headerAuth",
    path: "login",
    icon: Icon20DoorEnterArrowRightOutline,
  },
];
