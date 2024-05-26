import { TeamSide } from "../../../../domain/Player/TeamSide";

export interface TeamSideCubeProps {
    svg: React.SVGProps<SVGSVGElement>;
    polygons?: { points: string }[];
    lines?: { x1: string, y1: string, x2: string, y2: string }[];
    teamSide: TeamSide;
    isActive: boolean;
    children?: React.ReactNode | React.ReactNode[];
}