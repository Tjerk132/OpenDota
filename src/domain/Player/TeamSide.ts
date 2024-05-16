export const TeamSide = {
    Radiant: "radiant",
    Dire: "dire"
} as const

export type TeamSide = typeof TeamSide[keyof typeof TeamSide]