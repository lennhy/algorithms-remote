class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){  
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    shift(val){
        var newNode = new Node(val);
        if(!this.head){
            return  "This is emtpy"
        } else {
            let temp = this.head.next
            // this.head = newNode;
            this.head = temp
        }
        this.length++;
        return this;
    }

    unShift(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
        } else {
            let temp = this.head
            // this.head = newNode;
            this.head = newNode
            this.head.next = temp
        }
        this.length++;
        return this;
    }


    getData(val){
        var searchNode = new Node(val);
        if(val < 0 ){
            return "Index cannot be less than 1"
        }
        if(!this.head){
            return "there is no data"
        } 
        if(this.head === searchNode){
            console.log(JSON.stringify(val.val) + " is the head")
            return this.head
            // return "there is no data"
        }
        else {
            let val = this.head
            while( val.next !== null){
                // console.log("val ", val)
                // console.log("searchNod ", searchNode)
                if(val.val === searchNode.val){
                    console.log(JSON.stringify(val.val) + " is inside Linked List")
                    return val.val
                }
                val = val.next
            }
        }
        this.length++;
        return this;
    }



    getIndex(val){
        // var searchNode = new Node(val);
        if(val < 0 ){
            return "Index cannot be less than 1"
        }
        if(!this.head){
            return "there is no data"
        } 
        if(val === 0){
            console.log(JSON.stringify(val) + " is the head")
            return this.head
            // return "there is no data"
        }
        else {
            let node = this.head
            let counter = 0
            while( counter < val){
                node = node.next
                // console.log("val ", val)
                // console.log("searchNod ", searchNode)
                // if(counter === val){
                //     console.log(JSON.stringify(val.val) + " is inside Linked List")
                //     return val.val
                // }
                // val = val.next
                counter += 1
            }
            console.log(this.head)
            console.log(node)
            return node
        }
        this.length++;
        // return this;
    }

}

var list = new SinglyLinkedList()
// list.push(33)
// list.push(44)
// list.push(21)
// // console.log(list.head)
// // list.shift()
// // console.log(list)
// list.unShift(1009)
// // console.log(list.head.next)
// list.getIndex(0)


function factorial(num){
    if(num === 1)
        return 1;
    console.log(num * factorial(num-1))
    return num * factorial(num-1)
}
factorial(5)
