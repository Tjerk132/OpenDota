import { TeamSide } from "../../../../../domain/Player/TeamSide";

export interface BarracksProps {
    svg: React.SVGProps<SVGSVGElement>;
    teamSide: TeamSide;
    isActive: boolean;
}