export const TowerPosition = {
    Tier1: "tier1",
    Tier2: "tier2",
    Tier3: "tier3",
    AncientLeft: "ancientleft",
    AncientRight: "ancientright"
} as const

export type TowerPosition = typeof TowerPosition[keyof typeof TowerPosition]