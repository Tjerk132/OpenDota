import { TeamSide } from "../../../../domain/Player/TeamSide";

export interface PickBan {
    isPick: boolean;
    heroId: number;
    teamSide: TeamSide;
    order: number;
}