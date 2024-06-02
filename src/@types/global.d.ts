declare global {
    interface Array<T> {
        sum(callback: (item: T) => number): number;
        max(callback: (item: T) => number): number;
        min(callback: (item: T) => number): number;
        groupBy(callback:(item: T) => K): [K, T[]][];
    }
    interface String {
        toTitleCase(separator?: string): string;
    }
}

export { };