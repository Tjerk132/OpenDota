export const TeamAdvantageGraph = {
    Gold: 0,
    Xp: 1,
} as const

export type TeamAdvantageGraph = typeof TeamAdvantageGraph[keyof typeof TeamAdvantageGraph]