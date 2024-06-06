import { TeamSide } from "../../../../../domain/Player/TeamSide"
import { Lane } from "../../../../../domain/Game/Lane";
import { TowerLocation } from "./TowerLocation";

export interface TowerLocations {
    [TeamSide.Radiant]: {
        [Lane.Top]: TowerLocation[];
        [Lane.Mid]: TowerLocation[];
        [Lane.Bot]: TowerLocation[];
    }
    [TeamSide.Dire]: {
        [Lane.Top]: TowerLocation[];
        [Lane.Mid]: TowerLocation[];
        [Lane.Bot]: TowerLocation[];
    }
}