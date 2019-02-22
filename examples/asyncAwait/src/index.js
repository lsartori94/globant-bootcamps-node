module.exports = {
    greet: function(fullname) {
        console.log(`Hello ${fullname}!`);
    },
    withPromise: function(name, lastname) {
        console.log("Call function with promise...");
        return new Promise((resolve, reject)=>{
            console.log("Waiting...");
            setTimeout(()=>{
                console.log("Resolve");
                resolve(`${name} ${lastname}`);
            }, 5000); 
        })
    }
}