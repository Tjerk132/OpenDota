import { PlayerProps } from "../../../../domain/Player/PlayerProps";

export interface PlayersTableProps {
    selectedTab: number;
    setTab: (index: number) => void;
    players: PlayerProps[];
}