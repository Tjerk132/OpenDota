export const Role = {//1,2,3 ????
    Safe: 1,
    Middle: 2,
    Off: 3
} as const

export type Role = typeof Role[keyof typeof Role]