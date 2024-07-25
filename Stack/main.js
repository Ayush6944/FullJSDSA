// stack is just a simple array or data storing container with some features / methods like peek-to see top of the stack , push ,pop, vacant
//          
//              52  <-- top of stack
//              15  
//              15  
//              18  
//              84  
//              15  

class Stack{
    constructor(){
        this.stack=[]
    }
    vacant(){
        if(this.stack.length === 0){
            console.log("stack is empty");
            return false
        }
        return true
    }
    push(element){
        if(this.vacant){
            this.stack.push(element)
        }
    }
    pop(){
        if(this.vacant){
            this.stack.pop()
        }
    }
    top(){
        if(this.vacant)
        console.log("empty stack ." )
    }
    show(){
        return(this.stack.forEach(element => {
            console.log(element);
          }));
    }

}
 const stack = new Stack
 stack.push(6532)
 stack.push(789)
 stack.push(6002)
//  console.log(stack.show());
stack.show()
