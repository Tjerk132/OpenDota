import axios from "axios";
import { useQuery } from "react-query";
import { Player } from "../../matches/DTO/Match";

export const useXpLevelQuery = () => {
    const url = `/constants/xp_level.json`;

    const { data: xpLevels, isLoading } = useQuery("xp_levels",
        async () => {
            const response = await axios.get<number[]>(url);

            return response.data;
        },
        {
            staleTime: Infinity
        });

    const xpLevel = (xpAmount: number) => {
        
        if (xpLevels) {
            const level = xpLevels.findIndex(xpLevel => xpLevel > xpAmount);
            // console.log(xpLevels, xpAmount, level);
            
            return level;
        }
        return 0;
    }

    const playerLevelByMinute = (player: Player, minute: number) => {
        const killedPlayerXp = player?.xp_t[minute];

        return xpLevel(killedPlayerXp ?? 0);
    }

    return { playerLevelByMinute, isLoading }
}