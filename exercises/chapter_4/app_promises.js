const request = require("request-promise");
const args = process.argv.slice(2);
const apiUrl = "https://jsonplaceholder.typicode.com";

if (args.length === 0) {
  console.error("You need to especify a comment id");
  process.exit();
}


request(`${apiUrl}/comments/${args[0]}`)
  .catch(err => {
    return console.log(err);
  })
  .then(body => {
    const resp1 = JSON.parse(body);

    request(`${apiUrl}/posts/${resp1.postId}`)
      .catch(err => {
        return console.log(err);
      })
      .then(body => {
        const resp2 = JSON.parse(body);
        request(`${apiUrl}/users/${resp2.userId}`)
          .catch(err => {
            return console.log(err);
          })
          .then(body => {
            const resp3 = JSON.parse(body);
            console.log(`Nombre: ${resp3.name}`);
            console.log(`Email: ${resp3.email}`);
            console.log(`Company: ${resp3.company.name}`);
          });
      });
  });
