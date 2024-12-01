const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
 
const newItems = _.flattenDeep(items) // nested array ko tor kr ek array me daal deta hai
console.log(newItems) 