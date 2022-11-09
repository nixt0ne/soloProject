// Fronts
// Use classes, attributes, and methods in the JavaScript 
// language for all challenges. Use only a single JavaScript 
// file for this assignment. All examples are done in order, 
// starting with a new instance of the SLL class.

// Add Front
// Write a method that accepts a value and create a new node, 
// assign it to the list head, and return a pointer to the new head node.

//  class SLL {
//      // constructor, other methods, removed for brevity
//      addFront(value) {
    	
//     }
//  }
// copy
// Examples:

// SLL1 = new SLL()
// SLL1.addFront(18) => Node { data: 18, next: null }
// SLL1.addFront(5) => Node { data: 5, next: Node { data: 18, next: null } }
// SLL1.addFront(73) => Node { data: 73, next: Node { data: 5, next: Node { data: 18, next: null } } }


// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;              
//     }
// }
// class LinkedList {
//     constructor() {
//         this.head = null;
//     }
//     addFront(val) {
//         let new_node = new Node(val);
//         new_node.next = this.head;
//         this.head = new_node;
//         return this;
//     }
// }
// let SLL1= new LinkedList()
// SLL1.addFront(18)
// SLL1.addFront(5)
// SLL1.addFront(73)
// console.log(SLL1)

// Remove Front
// Write a method to remove the head node and return the new list head node.
//  If the list is empty, return null.

//  class SLL {
//     // constructor, other methods, removed for brevity
//      removeFront() {
    	
//     }
//  }
// copy
// Examples:

// SLL1.removeFront() => Node { data: 5, next: Node { data: 18, next: null } }
// SLL1.removeFront() => Node { data: 18, next: null }

class Node {
        constructor(data) {
            this.data = data;
            this.next = null;              
        }
    }
    class LinkedList {
        constructor() {
            this.head = null;
        }

        addFront(val) {
        let new_node = new Node(val);
        new_node.next = this.head;
        this.head = new_node;
        return this;
    }

        removeFront() {
            if(this.head == null){
                return this.head
            }
            let remove_node = this.head;
            this.head = remove_node.next
            remove_node.next = null;
            return this.head;
        }




// let SLL1= new LinkedList()

// console.log(SLL1)




// Front
// Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.

//  class SLL {
//     // constructor, other methods, removed for brevity
//      front() {

//     }
//  }
// copy
// Examples:

// SLL1.front() => 18
// SLL1.removeFront() => null
// SLL1.front() => null


front(){
    if (this.head == null) {
        return null
    }else{
    return this.head.data
    }
}

}



let SLL1= new LinkedList()
SLL1.addFront(18)
SLL1.addFront(5)
SLL1.addFront(73)
SLL1.removeFront()
// SLL1.front()
console.log(SLL1)
console.log(SLL1.front())
