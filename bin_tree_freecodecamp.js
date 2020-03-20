function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;

  this.add = function(value){
   let newNode = new Node(value)
   if(this.root === null){
     this.root = newNode
     return undefined;
   }
    if(this.root.value === newNode.value){
     return null;
   }
   else{
     let node = this.root;
      while(node !== null){
        if(node.value === newNode.value){
          return null;
        }
        // first check if node is greater than or less than root
        // if greater than move to right node
        if(newNode.value > node.value){
          if(node.right === null){
            node.right = newNode;
            return;
          }
          else{
            node = node.right
          }
        }
        // if less than move to left node
        if(newNode.value < node.value){
            if(node.left === null){
            node.left = newNode;
            return;
          }
          else{
            node = node.left
          }
        }
        // repeat until node is null then add node
      }
      return undefined;
    }
  }
}

let bin = new BinarySearchTree()
bin.add(8)
bin.add(3)
bin.add(10)
bin.add(1)
bin.add(6)
bin.add(14)
bin.add(4)
bin.add(13)
bin.add(7)






 console.log(JSON.stringify(bin));