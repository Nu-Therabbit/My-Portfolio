import {IconType} from "react-icons/lib";

export interface About {
    topic: string,
    infos: Info[],
}

export interface Info {
    title: string,
    icons?: Icon[],
    stage?: string,
}

export interface Icon {
    name: string,
    img: IconType,
}
