import { TeamSide } from "../../../../../domain/Player/TeamSide";
import { PlayerKills } from "../PlayerKills";

export interface TeamKillsProps {
    teamSide: TeamSide;
    kills: PlayerKills[];
}