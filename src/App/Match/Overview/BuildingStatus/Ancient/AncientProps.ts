import { TeamSide } from "../../../../../domain/Player/TeamSide";

export interface AncientProps {
    svg: React.SVGProps<SVGSVGElement>;
    teamSide: TeamSide;
    isActive: boolean;
}