import { TeamSide } from "../../../../domain/Player/TeamSide";

export interface TeamSideCubeProps {
    svg: React.SVGProps<SVGSVGElement>;
    polygons?: React.SVGProps<SVGPolygonElement>[];
    lines?: React.SVGProps<SVGLineElement>[];
    teamSide: TeamSide;
    isActive: boolean;
    children?: React.ReactNode | React.ReactNode[];
}