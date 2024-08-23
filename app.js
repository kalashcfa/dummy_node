const l_dash = require('lodash')

const arr = [1, [2, [3, [4, [5]]]]]
console.log(arr[0].[0]);

const newArr = l_dash.flattenDeep(arr)
console.log(newArr)