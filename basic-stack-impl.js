class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value){
    const newNode = new Node(value);
    
    if(this.lenght === 0){
      this.top = newNode;
      this.bottom = newNode;
    } else {
       const holdingPointer = this.top;
       this.top = newNode;
       this.top.next = holdingPointer;
    }

    this.lenght++;
    return this;

  }

  pop(){
    if(!this.top){
      return null; 
    }
    if(this.top === this.bottom){
      this.bottom = null;
    }
    //const holdingPointer = this.top;
    this.top = this.top.next;
    this.lenght --;
    return this;
  }

  //isEmpty
}

module.exports.run = function(){
  const myStack = new Stack();

  myStack.push('Google');
  myStack.push('Udemy');
  myStack.push('Discord');
  myStack.peek();
  myStack.pop();
  myStack.pop();
  myStack.pop();


  //Discord
  //Udemy
  //google
} 

