/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let result = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        const width = right - left;
        const minHeight = Math.min(height[left], height[right]);

        result = Math.max(result, minHeight * width);

        if (height[left] <= height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return result;
};
