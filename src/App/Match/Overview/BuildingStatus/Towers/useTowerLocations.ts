import { TeamSide } from "../../../../../domain/Player/TeamSide"
import { Lane } from "../Lane"
import { TowerPosition } from "../TowerPosition"
import { TowerLocations } from "./TowerLocations"

export const useTowerLocations = () => {

    //find a way to calculate this
    const towerLocations: TowerLocations = {
        [TeamSide.Radiant]: {
            [Lane.Top]: [
                { position: TowerPosition.Tier1, x: 45, y: 170 },
                { position: TowerPosition.Tier2, x: 45, y: 270 },
                { position: TowerPosition.Tier3, x: 45, y: 330 }
            ],
            [Lane.Mid]: [
                { position: TowerPosition.Tier1, x: 205, y: 265 },
                { position: TowerPosition.Tier2, x: 145, y: 320 },
                { position: TowerPosition.Tier3, x: 105, y: 350 },
                { position: TowerPosition.AncientLeft, x: 65, y: 375 },
                { position: TowerPosition.AncientRight, x: 80, y: 385 }
            ],
            [Lane.Bot]: [
                { position: TowerPosition.Tier1, x: 360, y: 420 },
                { position: TowerPosition.Tier2, x: 240, y: 420 },
                { position: TowerPosition.Tier3, x: 125, y: 415 }
            ],
        },
        [TeamSide.Dire]: {
            [Lane.Top]: [
                { position: TowerPosition.Tier1, x: 100, y: 55 },
                { position: TowerPosition.Tier2, x: 220, y: 55 },
                { position: TowerPosition.Tier3, x: 345, y: 60 }
            ],
            [Lane.Mid]: [
                { position: TowerPosition.Tier1, x: 240, y: 230 },
                { position: TowerPosition.Tier2, x: 300, y: 185 },
                { position: TowerPosition.Tier3, x: 360, y: 125 },
                { position: TowerPosition.AncientLeft, x: 390, y: 90 },
                { position: TowerPosition.AncientRight, x: 410, y: 100 }
            ],
            [Lane.Bot]: [
                { position: TowerPosition.Tier1, x: 425, y: 300 },
                { position: TowerPosition.Tier2, x: 425, y: 215 },
                { position: TowerPosition.Tier3, x: 430, y: 150 }
            ],
        }
    }

    const getByTeamSide = (teamSide: TeamSide) => {
        return Object.entries(towerLocations[teamSide]);
    }

    return { getByTeamSide };
}