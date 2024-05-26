import { TeamSide } from "../../../../../domain/Player/TeamSide"
import { BarracksType } from "../BarracksType"
import { Lane } from "../Lane"
import { BarracksLocations } from "./BarracksLocations"


export const useBarrackLocations = () => {

    //find a way to calculate this
    const barracksLocations: BarracksLocations = {
        [TeamSide.Radiant]: {
            [Lane.Top]: [
                { type: BarracksType.Melee, x: 40, y: 335 },
                { type: BarracksType.Ranged, x: 55, y: 335 }
            ],
            [Lane.Mid]: [
                { type: BarracksType.Melee, x: 90, y: 350 },
                { type: BarracksType.Ranged, x: 105, y: 360 }
            ],
            [Lane.Bot]: [
                { type: BarracksType.Melee, x: 110, y: 405 },
                { type: BarracksType.Ranged, x: 110, y: 420 }
            ],
        },
        [TeamSide.Dire]: {
            [Lane.Top]: [
                { type: BarracksType.Melee, x: 360, y: 50 },
                { type: BarracksType.Ranged, x: 360, y: 70 }
            ],
            [Lane.Mid]: [
                { type: BarracksType.Melee, x: 360, y: 110 },
                { type: BarracksType.Ranged, x: 380, y: 125 }
            ],
            [Lane.Bot]: [
                { type: BarracksType.Melee, x: 415, y: 135 },
                { type: BarracksType.Ranged, x: 435, y: 135 }
            ],
        }
    }

    const getByTeamSide = (teamSide: TeamSide) => {
        return Object.entries(barracksLocations[teamSide]);
    }

    return { getByTeamSide };
}