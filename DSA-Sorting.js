//Bubble Sort
function bubbleSort(array) {
    let swaps = 0;
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            swap(array, i, i + 1);
            swaps++;
        }
    }

    if (swaps > 0) {
        return bubbleSort(array);
    }
    return array;
};
function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};

//Merge Sort
function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    left = mergeSort(left);
            // console.log('left', left)
    right = mergeSort(right);
            // console.log('right', right)
    
            // console.log('Stop')
    
    return merge(left, right, array);
};
function merge(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        //creating the subarrays
        //where the switching happens

        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        }
        else {
            array[outputIndex++] = right[rightIndex++];
        }

    }
    //these will change the orders of the array and subarray parts
    for (let i = leftIndex; i < left.length; i++) {
        //swapping using the output array's index
        array[outputIndex++] = left[i];
       
    }

    for (let i = rightIndex; i < right.length; i++) {
        // console.log('right', right[i])
        array[outputIndex++] = right[i];
        // console.log(array[outputIndex], right[i])

    }
    console.log('ARRAY', array)
    return array;
};

//Quicksort
function quickSort(array, start = 0, end = array.length) {
    if (start >= end) {
        return array;
    }
    const middle = partition(array, start, end);
    array = quickSort(array, start, middle);
    array = quickSort(array, middle + 1, end);
    return array;
};
function partition(array, start, end) {
    const pivot = array[end - 1];
    
    let j = start;
    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {
            console.log('pivot', pivot)
            console.log(array,'i', i,'j', j)
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end-1, j);
    return j;
};




// 1. Understanding merge sort
// What is the resulting list that will be sorted after 3 recursive calls to mergesort?
        /*[21, 1, 26, 45,
     29, 28, 2, 9,
     16, 49, 39, 27, 43, 34, 46, 40]*/
// What is the resulting list that will be sorted after 16 recursive calls to mergesort?
            //Only one number in each array
// What are the first 2 lists to be merged?
                //21 and 1
// Which two lists would be merged on the 7th merge?
                //43 and 34
let arr = [5, 4, 3, 2, 1]

// console.log(mergeSort(arr))
console.log(quickSort(arr))


//2. Understanding quicksort

