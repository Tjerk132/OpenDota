declare global {
    interface Array<T> {
        sum(callback: (item: T) => number): number;
        max(callback: (item: T) => number): number;
        min(callback: (item: T) => number): number;
    }
}

export { };