const shoppingList = [
    'mouka',
    'máslo',
    'cukr',
    'jablka',
    'skořice',
    'mléko',
    'cibule',
  ];

shoppingList.forEach((polozka) => {
    if (polozka.length % 2 === 0) {
        console.log(polozka.toUpperCase())
    }
})

let str = ""
const shoppingListString = shoppingList.forEach((polozka) => {
    str += polozka 
})
console.log(str)