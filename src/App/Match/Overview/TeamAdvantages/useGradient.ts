export const useGradient = (data: number[], mapValue: number) => {

    const map = (x: number, in_min: number, in_max: number, out_min: number, out_max: number) => {
        return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }

    const min = data.min(x => x);
    const max = data.max(x => x);

    const value = map(mapValue, max, min, 0, 100);

    return { value };
}