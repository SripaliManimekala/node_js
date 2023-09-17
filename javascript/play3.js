console.log(1);
console.log(2);


setTimeout(()=>{console.log('callback function is fired')}, 2000);


console.log(3);
console.log(4);

setTimeout(()=>{console.log('second callback function fired')},5000);

console.log(5);
console.log(6);
