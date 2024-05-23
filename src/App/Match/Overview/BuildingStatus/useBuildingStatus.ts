import { TeamSide } from "../../../../domain/Player/TeamSide";
import { BuildingStatusProps } from "./BuildingStatusProps";
import { TowerPosition } from "./TowerPosition";

export const useBuildingStatus = (props: BuildingStatusProps) => {

    const { towerStatusRadiant, towerStatusDire, barracksStatusRadiant, barracksStatusDire } = props;

    const buildings : { [key: number]: string} = {
        0: "Radiant Tier 1 Top Tower",
        1: "Radiant Tier 2 Top Tower",
        2: "Radiant Tier 3 Top Tower",
        3: "Radiant Tier 1 Middle Tower",
        4: "Radiant Tier 2 Middle Tower",
        5: "Radiant Tier 3 Middle Tower",
        6: "Radiant Tier 1 Bottom Tower",
        7: "Radiant Tier 2 Bottom Tower",
        8: "Radiant Tier 3 Bottom Tower",
        9: "Radiant Ancient Top Tower",
        10: "Radiant Ancient Bottom Tower"
    }

    const active_buildings: string[] = [];
    //Incorrect, find right way to determine status
    for (let i = 0; i <= 10; i++) {
        if (towerStatusRadiant & (1 << i)) {
            active_buildings.push(buildings[i]);
        }
    }

    // console.log(active_buildings);

    //find a way to do this automatically
    //see position from ancient
    const towers = {
        [TeamSide.Radiant]: {
            [TowerPosition.Top]: [{ x: 45, y: 340 }, { x: 45, y: 270 }, { x: 45, y: 170 }],
            [TowerPosition.Mid]: [{ x: 100, y: 360 }, { x: 145, y: 320 }, { x: 210, y: 260 }],
            [TowerPosition.Bot]: [{ x: 120, y: 420 }, { x: 240, y: 420 }, { x: 360, y: 420 }],
        },
        [TeamSide.Dire]: {
            [TowerPosition.Top]: [{ x: 100, y: 55 }, { x: 220, y: 55 }, { x: 340, y: 55 }],
            [TowerPosition.Mid]: [{ x: 240, y: 230 }, { x: 300, y: 185 }, { x: 360, y: 125 }],
            [TowerPosition.Bot]: [{ x: 425, y: 150 }, { x: 425, y: 215 }, { x: 425, y: 300 }],
        }
    }

    return { towers }
}