import { TeamSide } from "../../../../../domain/Player/TeamSide";
import { HeroAbilityUpgradesProps } from "../AbilityUpgradesProps";

export interface AbilityUpgradesTeamProps {
    teamSide: TeamSide;
    list: HeroAbilityUpgradesProps[];
}