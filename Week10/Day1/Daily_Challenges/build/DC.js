"use strict";
function validateUnionType(value, allowedType) {
    for (const type of allowedType) {
        if (typeof value == type)
            return true;
    }
    return false;
}
const allowedType = ['string', 'number'];
console.log(validateUnionType({}, allowedType));
console.log(validateUnionType("", allowedType));
