import { useAbilityQuery } from "../../../../../api/constants/abilities/useAbilityQuery";
import { Hero } from "../../../../../components/image/Hero/Hero";
import { HeroAbilityUpgradesProps } from "../AbilityUpgradesProps";
import { AbilityUpgradesHero } from "./AbilityUpgrades/AbilityUpgradesHero/AbilityUpgradesHero";
import "./AbilityUpgradesPlayer.scss";

export const AbilityUpgradesPlayer: React.FC<HeroAbilityUpgradesProps> = (props) => {
    const { heroId, abilityUpgrades } = props;

    const { abilities } = useAbilityQuery();

    const heroAbilityUpgrades = abilityUpgrades.map(abilityUpgradeId => {
        return abilities.find(ability => +ability.id === abilityUpgradeId) ?? { url: "idk wat dit is" + abilityUpgradeId, id: "1", name: "idk" };
    })

    return (<div className="ability-upgrades-player">
        <Hero heroId={heroId} style={{ width: 42, height: 24 }} />
        <AbilityUpgradesHero abilities={heroAbilityUpgrades} />
    </div>);
}