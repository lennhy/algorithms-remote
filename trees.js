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
				// if less than then move to left
				if(newNode.val < node.val ){
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
				console.log(node)
			}
			node = newNode

		}
		return this;
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
}




let bin = new BinarySearchTree()
bin.insert(20)
bin.insert(2)
bin.insert(25)
console.log(bin)


