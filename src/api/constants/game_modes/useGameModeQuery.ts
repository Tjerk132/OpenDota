import axios from "axios";
import { useQuery } from "react-query";
import { GameModes } from "./DTO/GameModes";

export const useGameModeQuery = () => {
    const url = `/constants/game_modes.json`;

    const { data: gameModes, isLoading } = useQuery("game_modes",
        async () => {
            const response = await axios.get<GameModes>(url);

            return response.data;
        },
        {
            staleTime: Infinity
        });

    const useGameMode = (gameModeId: number) => {
        if (gameModes) {
            const gameMode = gameModes[gameModeId];

            return gameMode.name
            .replace("game_mode_", "")
            .replaceAll("_", " ")
            .toTitleCase();
        }
        return '';
    }

    return { useGameMode, isLoading }
}