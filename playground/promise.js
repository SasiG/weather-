// var somePromise = new Promise((resolve, reject) => {
// setTimeout(() =>{
// //resolve('This has benn resolved ');
// reject('This message has ben rejected');
// }, 2000);
// })

// somePromise.then((message) => {
// console.log('Success: ',message);
// }, (errorMessage) => {
//     console.log('errorMessage: ',errorMessage)
// });


var asyncAdd = (a, b) => {
return new Promise ((resolve, reject) => {
setTimeout(()=>{
if(typeof a === 'number' && typeof b === 'number'){
    resolve(a + b);
}else{
    reject('Arguments should be numbers');
}
},1500);
});
};

asyncAdd(7, 9).then((res) =>{
    console.log('Result: ',res);
    return(44, res);
},(errorMessage) =>{
 console.log('Error :', errorMessage);
});