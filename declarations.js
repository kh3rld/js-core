const escapeStr = '\`\\\/\"\'';
const arr = [4, '2'];
Object.freeze(arr)
const obj = {
    str: 'value',
    num: 1,
    bool: true,
    undef: undefined,
};
Object.freeze(obj)
const nested = {
    arr: [4, undefined, '2'],
    obj: {
        str: 'value',
        num: 1,
        bool: true,
        undef: undefined,
    }
};
Object.freeze(nested)