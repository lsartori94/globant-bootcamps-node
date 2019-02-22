module.exports = {
    // Synchronous version
    syncSum: function(a, b) {
        console.log(a+b);
    },
    // Asynchronous version
    asyncSum: function(a, b) {
        setTimeout(()=>{
            console.log(a+b);
        }, 5000);
    }
}