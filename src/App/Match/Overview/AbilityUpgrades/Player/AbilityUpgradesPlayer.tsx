import { useAbilityQuery } from "../../../../../api/constants/abilities/useAbilityQuery";
import { HeroAbilityUpgradesProps } from "../AbilityUpgradesProps";
import { AbilityUpgradesHero } from "./AbilityUpgrades/AbilityUpgradesHero/AbilityUpgradesHero";
import "./AbilityUpgradesPlayer.scss";

export const AbilityUpgradesPlayer: React.FC<HeroAbilityUpgradesProps> = (props) => {
    const { abilityUpgrades } = props;

    const { abilities } = useAbilityQuery();

    const heroAbilityUpgrades = abilityUpgrades.map(abilityUpgradeId => {
        return abilities.find(ability => +ability.id === abilityUpgradeId) ?? { url: "idk wat dit is" + abilityUpgradeId, id: "1", name: "idk" };
    })

    return (<div className="ability-upgrades-player">
        <AbilityUpgradesHero abilities={heroAbilityUpgrades} />
    </div>);
}