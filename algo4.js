/**
 * @param {Array} arr
 * @return {Array}
 */
function pyTrip(arr) {
    arr.sort((a, b) => a - b);
    let sqr = arr.map(num => num * num);
    let high = sqr.length - 1;
    while (high > 1) {
        let highB = high - 1;
        let walker = highB - 1;
        while (sqr[highB] + sqr[walker] >= sqr[high]) {
            if (sqr[highB] + sqr[walker] === sqr[high]) {
                return [arr[walker], arr[highB], arr[high]];
            } else {
                walker--;
            }
        }
        high--;
    }
    return [];
}

console.log(pyTrip([3, 4, 5, 36, 113, 5, 15]));