/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    var toBe = (value) => {
        if(value === val) {
            return true
        }else {
            return 'Not Equal'
        }
    }
    var notToBe = (value) => {
        if(value !== val){
            return true
        }else {
           return 'Equal'
        }
    }
    return {
        toBe: toBe,
        notToBe: notToBe,
    }
};

console.log(expect(5).toBe(5)) //true
console.log(expect(5).notToBe(5)) //Equal