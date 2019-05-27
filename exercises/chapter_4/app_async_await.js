const request = require("promise-request");
const apiUrl = "https://jsonplaceholder.typicode.com";
const args = process.argv.slice(2);

if (args.length === 0) {
  console.error("You need to especify a comment id");
  process.exit();
}

var call = 1;

request(`${apiUrl}/comments/${args[0]}`)
  .catch(err => {
    console.log(err);
  })
  .then(body => {
    setTimeout(() => {
      console.log("Resolving 1");
      resolve(JSON.parse(body));
    }, 2000);

    request(`${apiUrl}/posts/${resp1.postId}`)
      .catch(err => {
        console.log(err);
      })
      .then(body => {
        setTimeout(() => {
          console.log("Resolving 2");
          resolve(JSON.parse(body));
        }, 2000);

        request(`${apiUrl}/users/${resp2.userId}`)
          .catch(err => {
            console.log(err);
          })
          .then(body => {
            setTimeout(() => {
              console.log("Resolving 3");
              const resp3 = JSON.parse(body);
              console.log(`Nombre: ${resp3.name}`);
              console.log(`Email: ${resp3.email}`);
              console.log(`Company: ${resp3.company.name}`);
            }, 2000);
          });
      });
  });
