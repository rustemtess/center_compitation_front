import { ComponentType } from "react";

interface VKIcon {
    width: Number;
    height: Number;
    color: string;
}

export interface IHeader {
    pageId?: Number;
}

export interface IHeaderItem {
    id: Number;
    path: string;
    name: string;
    icon?: ComponentType;
}