export const PlayerItemType = {
    Buff: "buff",
    Item: "item",
    Neutral: "neutral",
    Backpack: "backpack"
} as const

export type PlayerItemType = typeof PlayerItemType[keyof typeof PlayerItemType]