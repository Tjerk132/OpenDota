import { PlayerItemProps } from "./PlayerItemProps";
import { PlayerItemType } from "../../../domain/Player/PlayerItemType";
import { useItemsQuery } from "../../../api/constants/items/useItemsQuery";
import "./PlayerItem.scss";

export const PlayerItem: React.FC<PlayerItemProps> = (props) => {

    const { itemId, type = PlayerItemType.Item } = props;

    const { useItem, isLoading } = useItemsQuery();

    const url = useItem(itemId, type);

    const getClassName = () => {
        switch (type) {
            case PlayerItemType.Buff: return "player-item"
            case PlayerItemType.Item: return "player-item"
            case PlayerItemType.Neutral: return "player-item player-item--neutral"
            case PlayerItemType.Backpack: return "player-item player-item--backpack"
        }
    }

    return (isLoading ? <div>...</div> : <img src={url} className={getClassName()} alt="player-item" />);
}