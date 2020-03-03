
function findLargestPrimneFactor(n){

	if(n < 2){
		return
	}	

	let max = 2;
	for(let i = 2; (i * 2) < n ; i++) {

		// if(n % i===0 && i % 2 !== 0){
		// 	if( i > max ){
		// 		max = i;
		// 	}
		// }
	for(let j=i-1; j > 2; j--){
		if(j % i !==0){
			continue
		}
		else{
			break
		}
	 	if(j === 3){
	 		if(n % i==0 && i % 2 !== 0){
			if( i > max ){
				max = i;
			}
		}
	 	}
	}

	}
	return max;
}

console.log(findLargestPrimneFactor(13195))


// if i cannoit be dicvided by all gthe other numbers befor it
	// for(let j=i-1; j > 2; j--){
	// 	if(j % i !===0){
	// 		continue
	// 	}
	// 	else{
	// 		break
	// 	}
	//  	if(j === 3){
	//  		if(n % i===0 && i % 2 !== 0){
	// 		if( i > max ){
	// 			max = i;
	// 		}
	// 	}
	//  	}
	// }
