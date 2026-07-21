

function maxSumDivThree(nums) {
    let totalSum = nums.reduce((acc, num) => acc + num, 0);
    let remainder = totalSum % 3;

    if (remainder === 0) {
        return totalSum;
    }

    let minRemainder1 = Infinity;
    let minRemainder2 = Infinity;

    for (let num of nums) {
        if (num % 3 === 1) {
            minRemainder1 = Math.min(minRemainder1, num);
        } else if (num % 3 === 2) {
            minRemainder2 = Math.min(minRemainder2, num);
        }
    }

    if (remainder === 1) {
        if (minRemainder1 !== Infinity) {
            return totalSum - minRemainder1;
        } else if (minRemainder2 !== Infinity && nums.filter(num => num % 3 === 2).length >= 2) {
            let secondMinRemainder2 = Infinity;
            for (let num of nums) {
                if (num % 3 === 2 && num !== minRemainder2) {
                    secondMinRemainder2 = Math.min(secondMinRemainder2, num);
                }
            }
            if (secondMinRemainder2 !== Infinity) {
                return totalSum - minRemainder2 - secondMinRemainder2;
            }
        }
    } else if (remainder === 2) {
        if (minRemainder2 !== Infinity) {
            return totalSum - minRemainder2;
        } else if (minRemainder1 !== Infinity && nums.filter(num => num % 3 === 1).length >= 2) {
            let secondMinRemainder1 = Infinity;
            for (let num of nums) {
                if (num % 3 === 1 && num !== minRemainder1) {
                    secondMinRemainder1 = Math.min(secondMinRemainder1, num);
                }
            }
            if (secondMinRemainder1 !== Infinity) {
                return totalSum - minRemainder1 - secondMinRemainder1;
            }
        }
    }

    return 0;
}   

console.log(maxSumDivThree([3, 6, 5, 1, 8])); // Output: 18