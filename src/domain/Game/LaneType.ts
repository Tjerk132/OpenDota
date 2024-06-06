export const LaneType = {
    Safe: 1,
    Middle: 2,
    Off: 3
} as const

export type LaneType = typeof LaneType[keyof typeof LaneType]