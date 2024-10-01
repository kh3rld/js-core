function get(keys) {
    return sourceObject[keys]
}

function set(key, value) {
    sourceObject[key] = value
    return value
}
console.log(get('num'))
console.log(set('bool', false))