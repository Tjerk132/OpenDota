import axios from "axios";
import { useQuery } from "react-query";
import { Regions } from "./DTO/Regions";

export const useRegionQuery = () => {
    const url = `/constants/regions.json`;

    const { data: regions, isLoading } = useQuery("regions",
        async () => {
            const response = await axios.get<Regions>(url);

            return response.data;
        },
        {
            staleTime: Infinity
        });

    const useRegion = (regionId: number) => {
        
        if (regions) {
            const region = regions[regionId];

            return region;
        }
        return '';
    }

    return { useRegion, isLoading }
}