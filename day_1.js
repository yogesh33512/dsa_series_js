// Day 1: Array - Find the largest and smallest elements in an array.

// Input: [3, 5, 1, 2, 4, 8]
// Output: Largest: 8, Smallest: 1


// ------------------------------------------------------------------------------------------------
// Selection sort --> Find the minimum element from array and placed to i indexed. 
// selection sort --->First loop will complete in n - 2 steps
//

// [3, 5, 1, 2, 4, 8]

// 1 step - [1, 5, 3, 2, 4, 8]  --> Swap minium Element;


function main() {
    let array = [3, 5, 1, 2, 4, 8];

    for(let i = 0; i <= array.length - 2; i++) {
        for(let j = i; j <= array.length - 1; j++) {
            if(array[i] > array[j]) {
                let temp = array[j]; 
                array[j] = array[i]; 
                array[i] = temp
            }
        }
    }

    console.log("Selection sort order", array);

    return {
        smallest: array[0],
        largest: array[array.length - 1]
    }
}

console.log(main())
