import { TeamSide } from "../../../../../domain/Player/TeamSide"
import { Lane } from "../../../../../domain/Game/Lane"
import { TowerPosition } from "../TowerPosition"
import { TowerLocations } from "./TowerLocations"

export const useTowerLocations = () => {

    const towerLocations: TowerLocations = {
        [TeamSide.Radiant]: {
            [Lane.Top]: [
                { position: TowerPosition.Tier1, x: 30, y: 120 },
                { position: TowerPosition.Tier2, x: 30, y: 190 },
                { position: TowerPosition.Tier3, x: 30, y: 235 }
            ],
            [Lane.Mid]: [
                { position: TowerPosition.Tier1, x: 140, y: 190 },
                { position: TowerPosition.Tier2, x: 95, y: 230 },
                { position: TowerPosition.Tier3, x: 70, y: 250 },
                { position: TowerPosition.AncientLeft, x: 40, y: 275 },
                { position: TowerPosition.AncientRight, x: 55, y: 285 }
            ],
            [Lane.Bot]: [
                { position: TowerPosition.Tier1, x: 250, y: 295 },
                { position: TowerPosition.Tier2, x: 160, y: 300 },
                { position: TowerPosition.Tier3, x: 90, y: 295 }
            ],
        },
        [TeamSide.Dire]: {
            [Lane.Top]: [
                { position: TowerPosition.Tier1, x: 80, y: 35 },
                { position: TowerPosition.Tier2, x: 170, y: 35 },
                { position: TowerPosition.Tier3, x: 245, y: 40 }
            ],
            [Lane.Mid]: [
                { position: TowerPosition.Tier1, x: 175, y: 160 },
                { position: TowerPosition.Tier2, x: 230, y: 115 },
                { position: TowerPosition.Tier3, x: 260, y: 85 },
                { position: TowerPosition.AncientLeft, x: 280, y: 50 },
                { position: TowerPosition.AncientRight, x: 300, y: 60 }
            ],
            [Lane.Bot]: [
                { position: TowerPosition.Tier1, x: 305, y: 210 },
                { position: TowerPosition.Tier2, x: 305, y: 150 },
                { position: TowerPosition.Tier3, x: 305, y: 100 }
            ],
        }
    }

    const getByTeamSide = (teamSide: TeamSide) => {
        return Object.entries(towerLocations[teamSide]);
    }

    return { getByTeamSide };
}