import { useItemsQuery } from "../../../api/items/useItemsQuery";
import { PlayerItemProps } from "./PlayerItemProps";
import "./PlayerItem.css"

export const PlayerItem: React.FC<PlayerItemProps> = (props) => {

    const { itemId, neutral = false } = props;

    const { useItem, isLoading } = useItemsQuery();

    const url = useItem(itemId, neutral);

    return (isLoading ? <div>...</div> : <img src={url} className="player-item" />);
}