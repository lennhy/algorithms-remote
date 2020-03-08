class Node{
	constructor(val){
		this.val = val;
		this.left = null;
		this.right = null;
	}
} 

class BinarySearchTree{
	constructure(){
		this.root = null
	}

	insert(val){
		let newNode = new Node(val);
		if(!this.root){
			this.root = newNode;
			return this.root;
		}
		else{
			let node = this.root
			while(node !== null){
				// check if node is less than or greater than root
				if(newNode.val < node.val ){
					// if less than then move to left
					if(node.left == null){
						node.left = newNode
						return;
					}else{
						node = node.left
					}
				}
				// if greater than then move to right 
				if(newNode.val > node.val){
					// if val does not exists then create val
					if(node.right == null){
						node.right = newNode
						return;
					}else{
						node = node.right
					}
				}
			}
			// node = newNode

		}
		// return this.root;
	}

	find(val){
		let newNode = new Node(val);
		if(!this.root){
			return false;
		}
		else{
			let node = this.root
			while(node){
				if(node.val === val){
					return true
				}
				// check if node is less than or greater than root
				if(val < node.val ){
					node = node.left
				}
				// if greater than then move to right 
				if(newNode.val > node.val){
					node = node.right
				}
			}

			return false;
		}
	}
	
	// insert(val){
	// 	if(this.root === null){
	// 		let node = this.root;
	// 	}

	// 	if(node === null){
	// 		node = new Node(val)
	// 		// finish insertion
	// 		return;
	// 	}

	// 	if(node.left < val){
	// 	    // move to rigth
	// 		 node = node.right
	// 		 insert(val)
	// 	}

	// 	if(val.left > val){
	// 		node = node.left
	// 		insert(val)
	// 		// move to rigth
	// 	}

	// }
	breadthFirstSearch(){
		var node = this.root,
		data = [],
		// The queue is what allows you to do breath first
		queue = [];
		queue.push(node)

		while(queue.length){
			// Remove the first node from the queue array
			node = queue.shift()

			// IMPORTANT! The data value of the tree node goes into the data array
			data.push(node.val)

			// Check for a sibling node
			if(node.left) queue.push(node.left)	
			if(node.right) queue.push(node.right)	
			// The tree node goes into the queue
			console.log("queue ----------- below")
			console.log(queue)
		}
		return data;
	}

	breadthFirstSearchValue(){

	}
}


let bin = new BinarySearchTree()
bin.insert(20)
bin.insert(2)
bin.insert(25)
bin.insert(100)
bin.insert(9)
bin.insert(16)
bin.insert(3)

console.log(BinarySearchTree)
// console.log(bin.find(9000))

console.log(bin.breadthFirstSearch())

// console.log(bin.breadthFirstSearchValue(3))
