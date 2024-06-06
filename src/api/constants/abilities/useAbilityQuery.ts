import axios from "axios";
import { useQuery } from "react-query";
import { Abilities, Ability } from "./DTO/Abilities";

export const useAbilityQuery = () => {
    const url = `/constants/abilities.json`;

    const { data, isLoading } = useQuery("abilities",
        async () => {
            const response = await axios.get<Abilities>(url);

            return response.data;
        },
        {
            staleTime: Infinity
        });

    const abilities = data?.abilities.map(ability => ({
        id: ability.id,
        name: ability.name,
        url: `/abilities/${ability.name}.jpg`
    }) as Ability) ?? [];

    return { abilities, isLoading }
}