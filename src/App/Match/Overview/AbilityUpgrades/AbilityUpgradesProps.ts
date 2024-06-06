export interface AbilityUpgradesProps {
    abilityUpgradesRadiant: HeroAbilityUpgradesProps[];
    abilityUpgradesDire: HeroAbilityUpgradesProps[];
}

export interface HeroAbilityUpgradesProps {
    heroId: number;
    abilityUpgrades: number[];
}