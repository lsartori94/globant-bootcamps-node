/* Just an example */
const request = require('request');
const args = process.argv.slice(2);

const apiUrl = 'https://jsonplaceholder.typicode.com';

/*
 * Check args
 * The script ends if it does not have args.
 */
if (args.length === 0) {
    console.error('You need to especify a comment id');
    process.exit();
}

/*
 * Retrieve a specific comment
 */
request(`${apiUrl}/comments/${args[0]}`, null, (err, res, body) => {
    // Check request errors
    if (err) { return console.log(err); }
    
    // Parse the response to json
    const resp1 = JSON.parse(body);

    /* Retrieve the post  */
    request(`${apiUrl}/posts/${resp1.postId}`, null, (err, res, body) => {
        // Check request errors
        if (err) { return console.log(err); }
    
        // Parse the response to json
        const resp2 = JSON.parse(body);
    
        /* Retrieve the user */
        request(`${apiUrl}/users/${resp2.userId}`, null, (err, res, body) => {
            // Check request errors
            if (err) { return console.log(err); }
    
            // Parse the response to json
            const resp3 = JSON.parse(body);
    
            // Show user name
            console.log(`Nombre: ${resp3.name}`);
            // Show user email
            console.log(`Email: ${resp3.email}`);
            // Show user company
            console.log(`Company: ${resp3.company.name}`);
        });
    });
});
