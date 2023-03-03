import { TextAndButtonInterface } from "../text-and-button/text-and-button.interface";

export interface ImageSectionInterface extends TextAndButtonInterface  {
    src?: string;
    direction?: string;
    height?: string;
}