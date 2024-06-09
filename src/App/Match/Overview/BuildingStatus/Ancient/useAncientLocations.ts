import { TeamSide } from "../../../../../domain/Player/TeamSide"
import { Lane } from "../../../../../domain/Game/Lane"
import { AncientLocations } from "./AncientLocations"

export const useAncientLocations = () => {

    //find a way to calculate this
    const ancientsLocations: AncientLocations = {
        [TeamSide.Radiant]: {
            [Lane.Mid]: [
                { x: 35, y: 295 }
            ]
        },
        [TeamSide.Dire]: {
            [Lane.Mid]: [
                { x: 295, y: 50 },
            ]
        }
    }

    const getByTeamSide = (teamSide: TeamSide) => {
        const entries = Object.entries(ancientsLocations[teamSide]);

        const location = entries
            .filter((([lane, _]) => lane === Lane.Mid))
            .flatMap(([_, positions]) => positions)
        [0];

        return location;
    }

    return { getByTeamSide };
}