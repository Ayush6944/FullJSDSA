

var circularqueue = function(k){
    this.queue = [];
    this.size = k ;
};

circularqueue.prototype.enqueue = function(element){

    if(this.size === this.queue.length){
        return 
    }
    this.queue.push(element)
}
circularqueue.prototype.dequeu = function (){
    if(this.queue.length===0){
        return    
    }
        this.queue.shift()
}
circularqueue.prototype.front=()=>{
    if(this.queue.length === 0){
        return
    }
    return this.queue[0]
}
circularqueue.prototype.rear = () =>{
    if(this.queue.length=== 0) return false
    return this.queue[this.queue.length - 1]
}
circularqueue.prototype.show = function(){
    return this.queue
}


var cirque = new circularqueue(5)

cirque.enqueue(621616)
cirque.enqueue(621616)
cirque.enqueue(621616)
cirque.enqueue(621616)
cirque.enqueue(621616)
cirque.enqueue(621616)
cirque.enqueue(621616)
cirque.dequeu()
cirque.dequeu()
console.log(cirque.show());
