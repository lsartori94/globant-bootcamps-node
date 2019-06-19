const request = require("async-request");
const apiUrl = "https://jsonplaceholder.typicode.com";
const args = process.argv.slice(2);

if (args.length === 0) {
  console.error("You need to especify a comment id");
  process.exit();
}

async function asyncRequest(url) {
  try {
    response = await request(url);
  } catch (err) {
    console.log(err);
    process.exit();
  }
  return response;
}
asyncRequest(`${apiUrl}/comments/${args[0]}`).then(response => {
  const resp1 = JSON.parse(response.body);
  asyncRequest(`${apiUrl}/posts/${resp1.postId}`).then(response => {
    const resp2 = JSON.parse(response.body);
    asyncRequest(`${apiUrl}/users/${resp2.userId}`).then(response => {
      const resp3 = JSON.parse(response.body);
      console.log(`Nombre: ${resp3.name}`);
      console.log(`Email: ${resp3.email}`);
      console.log(`Company: ${resp3.company.name}`);
    });
  });
});
