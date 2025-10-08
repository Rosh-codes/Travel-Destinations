export function filteredDataByLocation(database,fieldName,fieldValue) {
    return database.filter(
        destination => destination[fieldName].toLowerCase() === fieldValue.toLowerCase()
    )
}