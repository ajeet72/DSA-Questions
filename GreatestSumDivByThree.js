

function maxSumDivThree(nums) {
    let sum = 0
    let one = Infinity
    let two = Infinity
    for (const num of nums) {
        sum += num
        if (num % 3 === 1) {
            two = Math.min(two, num + one)
            one = Math.min(one, num)
        }
        if (num % 3 === 2) {
            one = Math.min(one, two + num)
            two = Math.min(two, num)
        }
    }
    if (sum % 3 === 0) {
        return sum
    }
    if (sum % 3 === 1) {
        return sum - one
    }
    return sum - two
}   

console.log(maxSumDivThree([3, 6, 5, 1, 8]));