class MyArray{
  constructor() {
    this.lenght = 0;
    this.data = {};
  }

  get(index){
    return this.data[index];
  }

  push(item){
    this.data[this.lenght] = item;
    this.lenght++;
    return this.lenght;
  }

  pop(){
    const lastItem = this.data[this.lenght-1];
    delete this.data[this.lenght-1];
    this.lenght--;
    return lastItem;
  }

  delete(index){
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index){
    for (let i = index ; i < this.lenght-1 ;i++)
    {
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.lenght-1];
    this.lenght--;
  }
}
module.exports.run = function() {
  const newArray = new MyArray();
  newArray.push('hi');
  newArray.push('you');
  newArray.push('!');
  //newArray.pop();
  //newArray.pop();
  newArray.delete(0);
  newArray.push('are');
  newArray.push('nice');
  newArray.delete(1);
  console.log(newArray);
}