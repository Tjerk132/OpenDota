export const TowerPosition = {
    Top: "top",
    Mid: "mid",
    Bot: "bot"
} as const

export type TowerPosition = typeof TowerPosition[keyof typeof TowerPosition]