
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


    mma(){
        let sum = 0
        let max = this.head.data
        let min = this.head.data
        let hold = this.head
        while(hold){
            sum += hold.data
            if(hold.data> max){
                max = hold.value
            }
            else if(hold.data< min){
                min = hold.data
            }
            hold = hold.next
        }
        return `${max}, ${min}, ${sum/this.length()}`

    }



    display() {
        let disp = ""
        if(this.head == null) {
            return disp
        }
        disp += this.head.data
        let hold = this.head.next
        while (hold!= null) {
            disp += "," + hold.data
            hold = hold.next
        }
            return disp

        // let disp = ""
        // for (let temp = this.head; temp != null; temp = temp.next) {
        //     disp += temp.data;
        //     let hold = temp
        //     disp += "," + hold.data
        //     return disp
        // }
        // return null
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


    length() {
            let temp = this.head;
            let count = 0;
            while (temp != null) {
                count++;
                temp = temp.next;
            }
            return count;
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
SLL1.addFront(15)
console.log(SLL1)
SLL1.removeFront()
SLL1.front()
console.log(SLL1.front())
console.log(SLL1.contains(5))
console.log(SLL1.length())
console.log(SLL1.display())
console.log(SLL1.mma())