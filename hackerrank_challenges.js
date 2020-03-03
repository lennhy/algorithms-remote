class Node{
    constructor(val){
        this.previous = null;
        this.next = null;
        this.val = val;
    }
}

class doublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    add(val){
        let newNode = new Node(val)

        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
            this.length+=1
        }
        else{
            this.tail.next = newNode
            newNode.previous = this.tail;
            this.tail = newNode;
            this.length+=1
        }
        return this;
    }

    findFromTail(position){
        let counter = 0
        if(this.length === 0){
            return null;
        }
       let node = this.tail
        while(node.previous){
            node = node.previous
            counter+=1;
            if(counter === position){
                return node.val
            }
        }
    }

    findFromHead(position){
        let counter = 0
        if(this.length === 0){
            return null;
        }
       let node = this.head
        while(node.next){
            node = node.next
            counter+=1;
            if(counter === position){
                return node.val
            }
        }
    }
}


let arr = [11, 100, 23, 19, 300, 9, 19, 40, 9]
let dList = new doublyLinkedList()
let i=0;
while(i < arr.length){
    dList.add(arr[i])
}

// return dList.findFromHead(1)
// dList.add(9)
// console.log(dList.findFromHead(1))
// Use this for when you want to randomoly swap stuff like in the rolodex 
// if you do an equation with more than one function in a line then you go into a rabit hole where each calculation compounds in a queue
// But then you come back around and combine each caclulation

  // function sum(input){
  //       if(input === 1){
  //         return 1; 
  //        }
  //       return input + fib(input-1) 
  //   }
    // console.log(fib(3))

    // function square(n){
        // if(loop n times ){
        //   return n; 
        //  }
        // return n  

        // n * n + n
    // }


    function multiplyByItself(n){
        let counter = 1;
        let times = n;
        while( counter !== (times)){
            n*=times
            counter++
        }
        return n  
    }


    function mBR(n){
        if(){

        }
        return n - mBR(n) 
    }


    // 5 x 5 x 5 x 5 x 5

    console.log(square(3))
