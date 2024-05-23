import axios from "axios";
import { useQuery } from "react-query";
import { LobbyTypes } from "./DTO/LobbyTypes";

export const useLobbyTypeQuery = () => {
    const url = `/constants/lobby_types.json`;

    const { data: lobbyTypes, isLoading } = useQuery("lobby_types",
        async () => {
            const response = await axios.get<LobbyTypes>(url);

            return response.data;
        },
        {
            staleTime: Infinity
        });

    const useLobbyType = (lobbyTypeId: number) => {
        
        if (lobbyTypes) {
            const lobbyType = lobbyTypes[lobbyTypeId];

            return lobbyType.name
            .replace("lobby_type_", "")
            .toTitleCase();
        }
        return '';
    }

    return { useLobbyType, isLoading }
}