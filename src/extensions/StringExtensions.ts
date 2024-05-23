///<reference path="../@types/global.d.ts" />

String.prototype.toTitleCase = function (separator: string = " "): string {
    return this
        .split(separator)
        .map(string =>
            string
                .charAt(0).toUpperCase()
                .concat(string.slice(1, string.length))
        )
        .join(separator);
}

export { };