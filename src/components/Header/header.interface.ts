import { ComponentType } from "react";

export interface IHeader {
    pageId?: Number;
}

export interface IHeaderItem {
    id: Number;
    path: string;
    name: string;
    icon?: ComponentType;
}