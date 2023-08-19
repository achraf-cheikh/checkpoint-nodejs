var fs = require("fs");

console.log("Hello world ");

//server creation with node.js

const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("<h1>Hello Node!!!!!</h1>\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// creation of a file named welcome.txt

fs.writeFile("welcome.txt", "Hello node", function (err) {
  if (err) throw err;
  console.log("File is created successfully.");
});

//reading of the content of the file welcome.txt

fs.readFile("./welcome.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

// creation of a file named password-generator.js

fs.writeFile(
  "password-generator.js",
  "//password-generator file",
  function (err) {
    if (err) throw err;
    console.log("File is created successfully.");
  }
);

// creation of a file named email-sender.js

fs.writeFile("email-sender.js", "//email-sender file", function (err) {
  if (err) throw err;
  console.log("File is created successfully.");
});
