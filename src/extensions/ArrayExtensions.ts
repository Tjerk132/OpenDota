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

export { };