import { Lane } from "../../../../../domain/Game/Lane";
import { TowerPosition } from "../TowerPosition";

export const useTowerStatus = () => {

    const towers: { [key: number]: { lane: Lane, position: TowerPosition } } = {
        0: { lane: Lane.Top, position: TowerPosition.Tier1 },
        1: { lane: Lane.Top, position: TowerPosition.Tier2 },
        2: { lane: Lane.Top, position: TowerPosition.Tier3 },
        3: { lane: Lane.Mid, position: TowerPosition.Tier1 },
        4: { lane: Lane.Mid, position: TowerPosition.Tier2 },
        5: { lane: Lane.Mid, position: TowerPosition.Tier3 },
        6: { lane: Lane.Bot, position: TowerPosition.Tier2 },
        7: { lane: Lane.Bot, position: TowerPosition.Tier2 },
        8: { lane: Lane.Bot, position: TowerPosition.Tier3 },
        9: { lane: Lane.Mid, position: TowerPosition.AncientLeft },
        10: { lane: Lane.Mid, position: TowerPosition.AncientRight },
    }

    const getActiveTowers = (status: number) => {
        
        const activeTowers: { lane: Lane, position: TowerPosition }[] = [];

        for (let i = 0; i <= Object.keys(towers).length; i++) {
            if (status & (1 << i)) {
                activeTowers.push(towers[i]);
            }
        }

        return activeTowers;
    }

    return { getActiveTowers }
}