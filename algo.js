#!/usr/bin/env node

// =================== LINKED LISTS  ========================

// function LinkedList() { 
//   var length = 0; 
//   var head = null; 

//   var Node = function(element){ 
//     this.element = element; 
//     this.next = null; 
//   }; 

//   this.size = function(){
//     return length;
//   };

//   this.head = function(){
//     return head;
//   };

//   this.add = function(element){
//     var node = new Node(element);
//     if(head === null){
//         head = node;
//     } else {
//         currentNode = head;

//         while(currentNode.next){
//             currentNode  = currentNode.next;
//         }

//         currentNode.next = node;
//     }

//     length++;
//   }; 

//   this.remove = function(element){
//     console.log(element)
//     // Only change code below this line
//     // var node = new Node(element)
//       if(this.head.element!== null && this.head.element !== element){
//         currentNode = this.head;
//         while(currentNode.next.element !== element ){
//            currentNode  = currentNode.next;
//         }
//         currentNode = currentNode.next
//       }
//       else{
//         return;
//       }
//     // Only change code above this line
//   };
// }

// var list = new LinkedList
// list.add(3)
// list.add(9)
// list.add(11)
// list.remove(3)
// console.log(list.head())


// =================== 2D ARRAYS  ========================
// const arr = [
//                   [2, 3, 4, 1, 0, 1], 
//                   [3, 6, 7, 3, 9, 1], 
//                   [2, 3, 4, 1, 0, 1], 
//                   [8, 3, 4, 1, 0, 1], 
//                   [0, 3, 4, 1, 0, 1], 
//                   [9, 3, 4, 1, 2, 2] 
//                 ]

// function hourglass(arr) {
//   let maxHourglass =0;
//   let temp =0;

//   for(let j=0; j < arr.length; j++){
//     for(let i=0; i < 6; i++){
//       if( arr[j+2] !== undefined){
//         temp =  arr[j][i] + arr[j][i+1] + arr[j][i+2] + (arr[j+1][i+1]) + arr[j+2][i] + arr[j+2][i+1] + arr[j+2][i+2]
//         if( temp > 0 && temp !== NaN && temp >= maxHourglass){
//          maxHourglass = temp
//        }
//         if( temp < 0 && temp !== NaN && temp >= maxHourglass){
//          maxHourglass = temp
//        }
//      }
//    }
//  }
//  console.log(maxHourglass)
//  return maxHourglass
// }

// hourglass(arr)

// Udemy course J and A master class
// class Node{
//   constructor(val){
//     this.val = val
//     this.next = null;
//   }
// }


// class SinglyLinkedList{
//   constructor(nod){
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }

//   push(val){
//     const nod = new Node(val)
//     if(this.head === null){
//       this.head = nod 
//       this.tail = nod 

//       this.length +=1
//     }
//     else{
//      let listNode = this.head 
//      while( listNode.next !== null ){
//         listNode = listNode.next
//      }
//      listNode.next =  nod  
//      this.tail =  nod  
//      this.length +=1
//     }
//       return this;
//   }

//   pop(){
//     // check for tail by looping until you reach the tail
//     // check for previous node before tail 
//     // save this node as the previous node for every loop
//    let previous;
//    let listNode = this.head 

//    while( listNode.next !== null ){
//     previous = listNode
//     listNode = listNode.next
//    }
//    previous.next = null
//    this.tail = previous

//   }

// }

// // const node = new Node(33);
// // const node2 = new Node(23);
// // const node3 = new Node(9);
// const val1 = 33
// const val2 = 23
// const val3 = 9

// const list = new SinglyLinkedList()

// list.push(33)
// list.push(23)
// list.push(90)
// list.push(78)

// list.push(9)

// console.log(JSON.stringify(list.head))

// list.pop()

// console.log(JSON.stringify(list.head))

class Node{
  constructor(val){
    this.val = val;
    this.next = null;
    this.prev = null; // this makes it a double linked list
  }
}
class DoublyLinkedList{
  constructor(val){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

    push(val){
      var newNode = new Node(val)

      if(this.length === 0){
        this.head = newNode;
        this.tail = newNode;
      }
      else{
        this.tail.next = newNode;
        newNode.prev = this.tail
        this.tail = newNode
        // push 99 on tail
      }
      this.length ++;
      return this;
    }
}

// const node = new Node(23)
dList = new DoublyLinkedList()
dList.push(99)
dList.push(88)
dList.push(12)
dList.push(120)
dList.push(42)



console.log(dList)

