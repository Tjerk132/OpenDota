export interface LobbyTypes {
    [id: string]: LobbyType;
}

export interface LobbyType {
    id: number
    name: string
    balanced?: boolean
}