let myPromise = new Promise((resolve, reject) => {
  const fail = Math.floor(Math.random() * 2);
  console.log(fail)
  setTimeout(function(){
    if (fail === 0) {
      reject('Resolved');
    } else {
      resolve('Rejected');
    }
  }, 250);
});

myPromise.then((successMessage) => {
  console.log(`Promise ${successMessage}`);
}, (errorMessage) => {
  console.log(`Promise ${errorMessage}`);
});