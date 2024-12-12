mathObj = require("./math.js")
lodashObj = require("lodash")



const sum  = mathObj.add(3,2)
console.log('simple addition: ' + sum);

const multiplication  = mathObj.multi(3,2)
console.log('simple multiplication: ' + multiplication);


const numbers = [1,21,53,34,58,65,78,85,92]
const shuffNums =  lodashObj.shuffle(numbers)
console.log('Shuffled nums: ' + shuffNums);

const numsAvg = lodashObj.mean(numbers)
console.log('Average of numbers: ' + numsAvg);

numsSum = lodashObj.sum(numbers)
console.log('Sum of nums: ' + numsSum);

const maxNumber = lodashObj.max(numbers);
const minNumber = lodashObj.min(numbers);

console.log('Max of nums: ' + maxNumber);

console.log('Min of nums: ' + minNumber);

