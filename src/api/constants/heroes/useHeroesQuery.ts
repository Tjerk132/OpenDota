import axios from "axios";
import { useQuery } from "react-query";
import { Heroes } from "./DTO/Heroes";

export const useHeroesQuery = () => {

    const url = `/constants/heroes.json`;

    const { data: heroes, isLoading } = useQuery("heroes",
        async () => {
            const response = await axios.get<Heroes>(url);

            return response.data;
        },
        {
            staleTime: Infinity
        });

    const useHero = (heroId: number) => {
        if (heroes) {
            const hero = heroes[heroId];

            const heroString = hero.localized_name
                .toLowerCase()
                .replaceAll(" ", "_");

            return `/heroes/${heroString}.jpg`;
        }
    }

    return { useHero, isLoading }
}