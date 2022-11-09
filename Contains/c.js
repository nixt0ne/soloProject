
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
    contains(data){
        let hold = this.head
        while (hold) {
            if (hold.data === data){
                return true
            }
            hold = hold.next
        }
        return false
    }
        

        //     if (SLL1.contains(cont)){
        //     cont = true
        // }else{
        //     cont = false
        // }
        // return this


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




    front(){
        if (this.head == null) {
            return null
        }else{
        return this.head.data
        }
        }

    }



let SLL1= new LinkedList()

// let cont = 5
SLL1.addFront(18)
SLL1.addFront(5)
SLL1.addFront(73)
console.log(SLL1)
SLL1.removeFront()
SLL1.front()
console.log(SLL1.front())
console.log(SLL1.contains(5))