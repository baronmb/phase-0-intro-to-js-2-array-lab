// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){return cats.splice(3,0,name)}
function destructivelyPrependCat(name){return cats.splice(0,0,name)}
function destructivelyRemoveLastCat(name){return cats.splice(2,1)}
function destructivelyRemoveFirstCat(name){return cats.splice(0,1)}
function appendCat(name){return [...cats,name]}
function prependCat(name){return[name,...cats]}
function removeLastCat(name){return cats.slice(0,2)}
function removeFirstCat(name){return cats.slice(1)}
