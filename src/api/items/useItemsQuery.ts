import axios from "axios";
import { useQuery } from "react-query";
import { ItemIds } from "./DTO/ItemIds";

export const useItemsQuery = () => {

    const url = `/constants/item_ids.json`;

    const { data: itemIds, isLoading } = useQuery("itemids",
        async () => {
            const response = await axios.get<ItemIds>(url);

            return response.data;
        },
        {
            staleTime: Infinity
        });

    const useItem = (itemId: number, neutral: boolean) => {
        if (itemIds) {
            const item = itemIds[itemId];

            if (item === "ultimate_scepter")//108
            {
                return itemPath("aghanims_scepter", false);
            }
            return itemPath(item, neutral);
        }
    }

    const itemPath = (item: string, neutral: boolean) => `/items${neutral ? "/neutral" : ""}/${item}.jpg`;

    return { useItem, isLoading }
}