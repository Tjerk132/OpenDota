import { TeamSide } from "../../../../../domain/Player/TeamSide"
import { BarracksType } from "../BarracksType"
import { Lane } from "../../../../../domain/Game/Lane"
import { BarracksLocations } from "./BarracksLocations"


export const useBarrackLocations = () => {

    //find a way to calculate this
    const barracksLocations: BarracksLocations = {
        [TeamSide.Radiant]: {
            [Lane.Top]: [
                { type: BarracksType.Melee, x: 25, y: 240 },
                { type: BarracksType.Ranged, x: 40, y: 240 }
            ],
            [Lane.Mid]: [
                { type: BarracksType.Melee, x: 55, y: 250 },
                { type: BarracksType.Ranged, x: 75, y: 260 }
            ],
            [Lane.Bot]: [
                { type: BarracksType.Melee, x: 75, y: 285 },
                { type: BarracksType.Ranged, x: 75, y: 300 }
            ],
        },
        [TeamSide.Dire]: {
            [Lane.Top]: [
                { type: BarracksType.Melee, x: 260, y: 35 },
                { type: BarracksType.Ranged, x: 260, y: 45 }
            ],
            [Lane.Mid]: [
                { type: BarracksType.Melee, x: 260, y: 70 },
                { type: BarracksType.Ranged, x: 275, y: 85 }
            ],
            [Lane.Bot]: [
                { type: BarracksType.Melee, x: 300, y: 90 },
                { type: BarracksType.Ranged, x: 315, y: 90 }
            ],
        }
    }

    const getByTeamSide = (teamSide: TeamSide) => {
        return Object.entries(barracksLocations[teamSide]);
    }

    return { getByTeamSide };
}