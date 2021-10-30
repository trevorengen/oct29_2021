var TimeMap = function() {
    this.map = new Map();
};


/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    let items = this.map.get(key);
    if (!items) {
        items = [];
        this.map.set(key, items);
    }
    items.push({ timestamp, value });
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    let items = this.map.get(key) || [];
    let low = 0;
    let high = items.length;
    while (low < high) {
        const mid = Math.floor((high - low) / 2) + low;
        if (items[mid].timestamp > timestamp) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    const idx = high - 1;
    if (idx === -1) return '';
    return items[idx].value;
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */

var map = new TimeMap();
map.set('foo', 'bar', 10);
map.set('foo', 'bar2', 20);
console.log(map.get('foo', 5));
console.log(map.get('foo', 10));
console.log(map.get('foo', 15));
console.log(map.get('foo', 20));
console.log(map.get('foo', 25));