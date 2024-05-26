import { TeamSide } from "../../../../../domain/Player/TeamSide"
import { Lane } from "../Lane";
import { BarracksLocation } from "./BarracksLocation";

export interface BarracksLocations {
    [TeamSide.Radiant]: {
        [Lane.Top]: BarracksLocation[];
        [Lane.Mid]: BarracksLocation[];
        [Lane.Bot]: BarracksLocation[];
    }
    [TeamSide.Dire]: {
        [Lane.Top]: BarracksLocation[];
        [Lane.Mid]: BarracksLocation[];
        [Lane.Bot]: BarracksLocation[];
    }
}