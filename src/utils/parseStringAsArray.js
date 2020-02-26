module.exports = function parseStringAsArray(arrayAsString, regex=false) {
    if (!regex) return arrayAsString.split(',').map(tech => tech.trim())
    else return arrayAsString.split(',').map(tech => new RegExp(tech.trim().toLowerCase(), 'i'))
}