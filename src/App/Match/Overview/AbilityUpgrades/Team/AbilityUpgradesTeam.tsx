import { AbilityUpgradesPlayer } from "../Player/AbilityUpgradesPlayer";
import { AbilityUpgradesTeamProps } from "./AbilityUpgradesTeamProps";
import "./AbilityUpgradesTeam.scss";

export const AbilityUpgradesTeam: React.FC<AbilityUpgradesTeamProps> = (props) => {

    const { list } = props;

    const levels = Array.from({ length: 25 }, (_, i) => i + 1)

    return (
        <div className="ability-upgrades-team">
            <span className="ability-upgrades-team__levels">{levels.map(level => <span>{level}</span>)}</span>
            {list.map((abilityUpgradesPlayer, index) => <AbilityUpgradesPlayer key={index} {...abilityUpgradesPlayer} />)}
        </div>
    );
}