import { PlayerItem } from "./PlayerItem";
import { PlayerBuffs } from "./PlayerBuffs";

export interface PlayerProps {
    id: number;
    //overview
    heroId: number;
    level: number;
    role: string;
    lane: string;
    player: string | undefined;
    kills: number;
    deaths: number;
    assists: number;
    //farm
    networth: number;
    lasthits: number;
    denies: number;
    gpm: number;
    xppm: number;
    //damage
    heroDamage: number;
    heroHealing: number;
    buildingDamage: number;
    //items
    observersPlaced: number;
    sentriesPlaced: number;

    items: PlayerItem[];//6
    neutralItemId: number;
    backpack: PlayerItem[];//3
    buffs: PlayerBuffs;
}