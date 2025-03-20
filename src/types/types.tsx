import { StaticImageData } from "next/image";

export type WorksTileProps = {
    heading:string,
    description: string,
    src: StaticImageData,
    link : string,
    deploy : string
};

export type WorksSwiperCardProps = {
    heading:string,
    description:string,
    src: StaticImageData,
    link:string,
    deploy : string
};