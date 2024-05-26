import { BarracksType } from "../BarracksType";
import { Lane } from "../Lane";

export const useBarracksStatus = () => {

    const barracks: { [key: number]: { lane: Lane, barracksType: BarracksType } } = {
        0: { lane: Lane.Top, barracksType: BarracksType.Melee },
        1: { lane: Lane.Top, barracksType: BarracksType.Ranged },
        2: { lane: Lane.Mid, barracksType: BarracksType.Melee },
        3: { lane: Lane.Mid, barracksType: BarracksType.Ranged },
        4: { lane: Lane.Bot, barracksType: BarracksType.Melee },
        5: { lane: Lane.Bot, barracksType: BarracksType.Ranged },
    }

    const getActiveBarracks = (status: number) => {
        const activeBarracks: { lane: Lane, barracksType: BarracksType }[] = [];

        for (let i = 0; i <= Object.keys(barracks).length; i++) {
            if (status & (1 << i)) {
                activeBarracks.push(barracks[i]);
            }
        }

        return activeBarracks;
    }

    return { getActiveBarracks }
}