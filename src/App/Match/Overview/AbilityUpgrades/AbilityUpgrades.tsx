import { AbilityUpgradesProps } from "./AbilityUpgradesProps";
import { AbilityUpgradesTeam } from "./Team/AbilityUpgradesTeam";

export const AbilityUpgrades: React.FC<AbilityUpgradesProps> = (props) => {

    const { abilityUpgradesRadiant, abilityUpgradesDire } = props;

    return (
        <div>
            <h3>Radiant builds</h3>
            <AbilityUpgradesTeam list={abilityUpgradesRadiant} />
            <h3>Dire builds</h3>
            <AbilityUpgradesTeam list={abilityUpgradesDire} />
        </div>
    )
}