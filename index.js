const numbers = [4,2,9];

Array.prototype.sum = function(){
    let sum = 0;
    for(const num of this){
        sum +=num;
    }

    return sum;
}

console.log('+------------------------------+');
console.log(numbers);
console.log(numbers.sum());
console.log('+------------------------------+');