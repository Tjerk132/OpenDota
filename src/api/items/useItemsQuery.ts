import axios from "axios";
import { useQuery } from "react-query";
import { ItemIds } from "./DTO/ItemIds";
import { PlayerItemType } from "../../domain/Player/PlayerItemType";

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

    const useItem = (itemId: number, type: PlayerItemType) => {
        if (itemIds) {
            const item = itemIds[itemId];

            if (item === "ultimate_scepter")//108
            {
                return itemPath("aghanims_scepter", PlayerItemType.Item);
            }
            return itemPath(item, type);
        }
    }

    const itemPath = (item: string, type: PlayerItemType) => `/items${type === PlayerItemType.Neutral ? "/neutral" : ""}/${item}.jpg`;

    return { useItem, isLoading }
}