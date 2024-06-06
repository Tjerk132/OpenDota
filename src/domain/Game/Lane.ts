export const Lane = {
    Top: "top",
    Mid: "mid",
    Bot: "bot"
} as const

export type Lane = typeof Lane[keyof typeof Lane]