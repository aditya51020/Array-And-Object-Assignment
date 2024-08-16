const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort((a,b) => a-b);

console.log(ages)

const minAge = ages[0]
const maxAge = ages[ages.length-1]

console.log(minAge)
console.log(maxAge)

let medianAge;
const middleIndex = Math.floor(ages.length / 2);

console.log(middleIndex);
console.log(middleIndex - 1);

if (ages.length % 2 === 0) {
    medianAge = (ages[middleIndex - 1] + ages[middleIndex]) / 2;
} else {
    medianAge = ages[middleIndex];
}

console.log("Median Age:", medianAge); 

const sumAges = ages.reduce((sum, age) => sum + age, 0);
const averageAge = sumAges / ages.length;

console.log("Average Age:", averageAge); 



const range = maxAge - minAge;

console.log("Range of Ages:", range); 


const minAvgDifference = Math.abs(minAge - averageAge);
const maxAvgDifference = Math.abs(maxAge - averageAge);

console.log("Min - Average Difference:", minAvgDifference.toFixed(2)); 
console.log("Max - Average Difference:", maxAvgDifference.toFixed(2)); 