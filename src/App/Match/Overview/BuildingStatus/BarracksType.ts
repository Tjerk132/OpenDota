export const BarracksType = {
    Melee: "melee",
    Ranged: "ranged"
} as const

export type BarracksType = typeof BarracksType[keyof typeof BarracksType]