import { PlayerItemType } from "../../../domain/Player/PlayerItemType";

export interface PlayerItemProps {
    itemId: number;
    type?: PlayerItemType;
}