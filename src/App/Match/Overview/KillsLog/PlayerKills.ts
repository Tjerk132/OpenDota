import { PlayerKillsHero } from "./TeamKills/PlayerKillsHero";

export interface PlayerKills {
    heroId: number;
    kills: PlayerKillsHero[];
}