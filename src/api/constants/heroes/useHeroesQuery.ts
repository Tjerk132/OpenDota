import axios from "axios";
import { useQuery } from "react-query";
import { Hero, Heroes } from "./DTO/Heroes";

export const useHeroesQuery = () => {

    const url = `/constants/heroes.json`;

    const { data, isLoading } = useQuery("heroes",
        async () => {
            const response = await axios.get<Heroes>(url);

            return response.data;
        },
        {
            staleTime: Infinity
        });

    const heroes = (isLoading || !data) ? [] : Object.values(data);

    const useHeroById = (heroId: number) => {
        const hero = heroes.find(hero => hero.id === heroId);

        const heroString = hero?.localized_name
            .toLowerCase()
            .replaceAll(" ", "_");

        return `/heroes/${heroString}.jpg`;
    }

    const useHeroesByTeam = (heroIds: number[]) => {
        return heroes.filter(hero => heroIds.includes(hero.id));
    }
    
    return { useHeroesByTeam, useHeroById, isLoading }
}