// what is a queue it is a sequential datastructure which follow fifo (first in first out)

// some functions are 1.enqueue(elem) 2.dequeue 3.peek 4.length 5.isempty

// here we will use constructor function

class Queue{
    constructor(){
            this.items = []
    }
    isempty(){
        if (this.items.length === 0 ){
        return true
    }
    }

    enqueue(elem){
        this.items.push(elem);
    }
    dequeue(){
        if(this.isempty()){
            console.log("queue is empty");
            
        }
        this.items.shift();
        }
    peek(){
        console.log(`the first element is ${this.items[0]}`);    
    }
    size(){
        console.log(this.items.length);
        
    }
    show(){
        console.log(this.items);
        
    }
}

const app = new Queue()
app.enqueue(53)
app.enqueue(5354)
app.enqueue(530)
app.enqueue(53570)
app.enqueue(53570)
app.enqueue(530)
app.dequeue()
app.peek()
app.show()
app.dequeue()
app.show()