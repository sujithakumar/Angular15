export function getKeyByValue(object: any, value: string | number) {
    return Object.keys(object).find(key => object[key] === value);
}