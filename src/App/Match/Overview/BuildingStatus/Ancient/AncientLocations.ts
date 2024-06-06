import { TeamSide } from "../../../../../domain/Player/TeamSide"
import { Lane } from "../../../../../domain/Game/Lane";
import { AncientLocation } from "./AncientLocation";

export interface AncientLocations {
    [TeamSide.Radiant]: {
        [Lane.Mid]: AncientLocation[];
    }
    [TeamSide.Dire]: {
        [Lane.Mid]: AncientLocation[];
    }
}