import { useQuery } from "react-query";
import axios from "axios";
import { Match } from "./DTO/Match";

export const useMatchesQuery = () => {

    const matchKey = (matchId: number) => `match:${matchId}`;

    const useMatch = (matchId: number) => {
        
        const { data, isLoading } = useQuery(matchKey(matchId),
            async () => {
                const response = await axios.get<Match>("/assets/match.json");

                return response.data;
            },
            {
                refetchOnMount: false
            }
        );

        // const url = `https://api.opendota.com/api/matches/${matchId}`;

        // const { data, isLoading } = useQuery(matchKey(matchId),
        //     async () => {
        //         const response = await axios.get<Match>(url, {
        //             params: {
        //                 "significant": 0
        //             }
        //         });

        //         return response.data;
        //     },
        //     {
        //         refetchOnMount: false
        //     }
        // );

        return { data: data ?? {} as Match, isLoading }
    }

    return { useMatch }
}