var promise = new Promise(function(resolve, reject) {
  const x = 8;
    
  if(x%2 ==0) {
    resolve();
  } else {
    reject();
  }
});
  
promise.then
    (function () {
        console.log('Number is even');
    },
   function () {
        console.log('Number is odd');
    });