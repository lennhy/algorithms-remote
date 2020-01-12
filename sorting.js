var array1 =[ 2, 1, 9, 76, 4]
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

console.log(insertionSort(array1))