var promise = new Promise(function(resolve, reject) {
  const x = "This is my first promise example";
  const y = "I am ready to learn everything about it"
  if(x === y) {
    resolve();
  } else {
    reject();
  }
});
  
promise.then
    (function () {
        console.log('Success, Welcome tp programming');
    },
   function () {
        console.log('Some error has occured');
    });
