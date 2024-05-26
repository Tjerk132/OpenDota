import { TeamSide } from "../../../../../domain/Player/TeamSide";

export interface TowerProps {
    svg: React.SVGProps<SVGSVGElement>;
    teamSide: TeamSide;
    isActive: boolean;
}