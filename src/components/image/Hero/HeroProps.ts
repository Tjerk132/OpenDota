import { CSSProperties } from "react";
import { OverlayProps } from "./OverlayProps";

export interface HeroProps {
    heroId: number;
    overlay?: OverlayProps;
    style?: CSSProperties;
}