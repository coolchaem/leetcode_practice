/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 0 || x === 1) return x;
    let lo = 1, hi = x;
    while (lo < hi) {
        let mid = Math.floor((lo + hi) / 2);
        let pow = mid * mid;
        if (pow > x) {
            if (hi === mid) break;
            hi = mid;
        } else if (pow === x) {
            lo = mid;
            break;
        } else {
            if (lo === mid) break;
            lo = mid;
        }        
    }
    return lo;
};