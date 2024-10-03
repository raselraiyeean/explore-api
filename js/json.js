const user = {id: 1, name: 'Gorib Rasel', job: 'actor'}
const stringified = JSON.stringify(user);
console.log(user);
console.log(stringified);
const jsonParse = JSON.parse(stringified);
console.log(jsonParse);