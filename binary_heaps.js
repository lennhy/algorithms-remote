class MaxBinaryHeap{
		constructor(){
		this.values = []
	}

	insert(val){
		let parentIndex,
		childIndex,
		parentVal;
		// console.log(this.values)
		if(this.values === []){
			this.values.push(val)
		}
		else{
			this.values.push(val)
			parentIndex = Math.floor(((this.values.indexOf(val)) - 1) / 2)

			while(val > this.values[parentIndex] ) {
				childIndex = this.values.indexOf(val)
				// swap values
				parentVal = this.values[parentIndex]
				this.values[parentIndex] = val;
				this.values[childIndex] = parentVal;

				val = this.values[parentIndex];
				parentIndex = Math.floor(((this.values.indexOf(val)) - 1) / 2)
			}

			// the largest number needs to be at the start of the array
			// all parent nodes have to larger than their children
			// when adding children to parent create the left node first

		}
		// push val in array
		// Find parent: n / 2 -1 is the parent 
		// if child greater than parent then swap values save one of the values in a temp variable then swap
		// Keep doing this for all the values in the array until reach end then stop. Array is properly organized
		// array.push(val, child1, child2)
	}

	extractMaximum(){
		if(this.values.length > 0){
			const max = this.values[0]
			const end = this.values.pop()
			this.values[0] = end;
		}
	
		this.sinkDown()
		return max;
	}

	sinkDown(){
		let idx = 0;
		const element = this.values[0]

		while(true){
		const length = this.values.length;
			let leftChildIdx = 2 * idx +1;
			let rightChildIdx = 2 * idx +2;
			let leftChild, rightChild;
			let swap = null;

			// check if index is inbounds
			if(leftChildIdx < length){
				leftChild = this.values[leftChildIdx]
				if(leftChild > element){
					swap = leftChildIdx;
				}
			}

			if(rightChildIdx < length){
				rightChild = this.values[rightChildIdx]
				// If right child is greater than parent node or swap is = to lef child but rigth child is larger than left child
				if(swap === null && rightChild > element || swap !== null && rightChild > leftChild){
					swap = rightChildIdx;
				}
			}
			if(swap === null) break;
			// swap values
			// remove parent and replace with swap
			this.values[idx] = this.values[swap]
			this.values[swap] = element;
			idx = swap;
		}
	}
}


let mbh = new MaxBinaryHeap()
// mbh.insert(22)
// mbh.insert(202)
// mbh.insert(12)
// mbh.insert(23)
// mbh.insert(19)
// mbh.insert(8)

mbh.insert(41)
mbh.insert(39)
mbh.insert(33)
mbh.insert(18)
mbh.insert(27)
mbh.insert(12)
mbh.insert(55)

console.log(mbh.values)
console.log("-------")
mbh.extractMaximum()
console.log(mbh)
