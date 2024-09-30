const escapeStr = '\`\\\/\"\'';
const arr = [4, '2'];
const obj = {
    str: 'value',
    num: 1,
    bool: true,
    undef: undefined,
};
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
Object.freeze(arr)
Object.freeze(obj)