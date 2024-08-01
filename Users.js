const database = new Map();
export function addUser(name, password) {
   if (database.has(name)){
    return false
   } 
   database.set(name, password) 
   return true 
}
export function deleteUser(name) {
    database.delete(name)
}
export function verifyUser(name, password) {
   const user = database.get(name)
    if (user === undefined) {
        return false
    }
    return user === password 
}