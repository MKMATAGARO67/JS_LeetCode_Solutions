/**
 * @param {string} val
 * @return {Object}
 */

var expect = function(val) {
    
    return{
        toBe:function toBe(aval){
            if(val === aval) return true;
            throw new Error("Not Equal");

        },
         notToBe:function notToBe(aval){
            if(val !== aval) return true;
            throw new Error("Equal");
        }
    };
  
};


/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
