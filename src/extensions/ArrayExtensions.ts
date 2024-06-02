///<reference path="../@types/global.d.ts" />

Array.prototype.sum = function <T>(callback: (item: T) => number): number {
    return this.reduce((previousValue: number, currentValue: T) =>
        previousValue + callback(currentValue), 0);
}

Array.prototype.max = function <T>(callback: (item: T) => number): number {
    return this.reduce((previousValue: number, currentValue: T) => {
        var currentItemValue = callback(currentValue);
        return previousValue > currentItemValue ? previousValue : currentItemValue;
    }, 0);
}

Array.prototype.min = function <T>(callback: (item: T) => number): number {
    return this.reduce((previousValue: number, currentValue: T) => {
        var currentItemValue = callback(currentValue);
        return previousValue > currentItemValue ? currentItemValue : previousValue;
    }, 0);
}

Array.prototype.groupBy = function <K, T>(keyCallback: (item: T) => K): [K, T[]][] {
    const grouping = this.reduce((result: Map<K, T[]>, item: T) => {
        const key = keyCallback(item);
        if (!result.has(key)) {
          result.set(key, []);
        }
        result.get(key)?.push(item);
        return result;
      }, new Map<K, T[]>());

    return Array.from(grouping);
};

export { };