// fib(3, 0, 0, 0)

// function fib(val, i, num){
// 	console.log(num)
// 	let oldNum
// 	let newNum
// 	if(i === 0 || i === 1){

// 	}
// 	if(oldNum!=undefined){
// 		newNum =num+oldNum
// 	}else{
// 		newNum = num
// 	}
// 	if(i===val){
// 		// console.log(num)
// 		return 
// 	}
// 	else{
// 		oldNum = num
// 		i+=1
// 		if(newNum === 0){
// 			oldNum = newNum
// 			newNum +=1
// 		}else{
// 			// oldNum = num
// 			newNum +=oldNum
// 		}
// 	}
// 	oldNum = num
// 	return fib(val, i, newNum+oldNum)
// }

// // return fib(i, num+prevNum)


// function fib(val, i, oldNum, num){
// 	if(num > 1 ){
// 		num+=oldNum
// 	}

// 	console.log(num)
// 	oldNum = num
// 	if(val < 0 || i === val){
// 		return
// 	}
// 	if(num === 0){
// 		num+=1
// 	}
// 		return fib(val, i+=1, oldNum, num+=oldNum)
// }
// var num = 2
// var counter=0;
// fib(0)

// function fib(n){
// 	counter+=1
// 	console.log(counter)
// 	let b = (fib(n -1) + fib(n+1))
// 	if(n == 0){
// 		console.log(0)
// 	}
// 	if(n === 1){
// 		console.log(1)
// 	}

// 	if(n === counter){
// 		return
// 	}

// 	else{
// 		console.log(n)
// 		return b
// 	}

// 	// if(n < 0 || n === ""){
	// 	return
	// }
	
	// let b = (fib(n -1) + fib(n+1))

	
	// if(b = n){
	// 	return b
	// }	
// }
// var num =12
// counter = 0;
F(10, 0)

function F(n, counter) { 

	if(n == 1) { 
		counter +=1
		console.log(1)     
		// return 1;
	} 
	else{
		counter+=1
	}


	if(n == 0) {	
		console.log(0)  
		return 0;
	}

	return F(n-1, counter) + F(n-2, counter);

}




function countString(s, j){
	 console.log(j)
	if(s === ""){
		console.log("there is no string")
		return
	}

	if(s[j]=== undefined ){
    console.log(`There are ${j} letters in string`)
		return j
	}
  // j+=1
  if(j === 10){
    return
  }
  j+=1
	return countString(s, j)
}
// countString("pizza", 0)
