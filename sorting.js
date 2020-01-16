var array1 =[ 9, 1, 0, 76, 4, 3]
function insertionSort(arr){
	var currentVal;
	var temp;
	// let val;
	// compare val to each val in 
	// the arr starting from the last 
	// sorted value from the left
	
	for(var i =1; i < arr.length; i++){
		currentVal = arr[i]
		for(var z = i-1; z >= 0 && arr[z] > currentVal; z--){
			// if(arr[z] > currentVal ){
				arr[z+1] = arr[z]
			// }
		}
		arr[z+1] = currentVal
		console.log("end of loop")
	}
	return arr
}

// console.log(insertionSort(array1))


function quickSort(array){
	let pivot = 0;
	let temp ;
	// choose a pivot point 
	// return array;
	for(let i = 1; i < array.length; i++){
		console.log(i)
		// pivot = i;
		if(array[pivot] > array[i]){
			console.log("hell")
			// temp 
			// first = array[i]
			// second =  array[i++]

			pivot+=1;
		}
		else{
						console.log("bell")

			if(array[pivot] > array[i+1]){
				console.log("yes")
				temp = array[i];
				array[i] = array1[i+1]
				array1[i+1] = temp
			pivot+=1;

			}
			
		}
	}
	// array
	return array;
}

console.log(quickSort(array1))