module.exports = {
    sync: function(name) {
        return `Hello ${name}!`;
    },
    withCallback: function(name, cb) {
        setTimeout(()=>{
            console.log(cb(name));
        }, 5000);
    },
    withPromise: function(name) {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(name);
            }, 5000); 
        })
    }
}