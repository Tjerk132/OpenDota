export interface GameModes {
    [id: string]: GameMode;
}

export interface GameMode {
    id: number
    name: string
    balanced?: boolean
}