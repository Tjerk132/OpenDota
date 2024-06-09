import { AbilityUpgradesHeroProps } from "./AbilityUpgradesHeroProps";
import "./AbilityUpgradesHero.scss";

export const AbilityUpgradesHero: React.FC<AbilityUpgradesHeroProps> = (props) => {

    const { abilities } = props;

    return (<div className="ability-upgrades-hero">
        {abilities.map((ability, index) => <div key={index} className="ability-upgrades-hero__abilities">
            <img src={ability?.url} className="ability-upgrades-hero__abilities--img" />
        </div>)}
    </div>)
}