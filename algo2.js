/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
    let left = 0;
    let right = height.length - 1;
    let water = 0;
    let high = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            high = height[left] > high ? height[left] : high;
            left++;
            water += high - height[left] > 0 ? high - height[left] : 0;
        } else {
            high = height[right] > high ? height[right] : high;
            right--;
            water += high - height[right] > 0 ? high - height[right] : 0;
        }
    }
    return water;
};