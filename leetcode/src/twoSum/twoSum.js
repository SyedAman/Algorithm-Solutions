// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution.

// Example:
// ```
// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].
// ```

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (var addedIndex = 0; nums[addedIndex]; addedIndex++){
        for (var adderIndex = 0; nums[adderIndex]; adderIndex++) {
            if (nums[addedIndex] + nums[adderIndex] == target && addedIndex != adderIndex) {
                return [addedIndex, adderIndex];
            }
        }
    }
};