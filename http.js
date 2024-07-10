const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("hello");
    res.end();
  } else if (req.url === "/home") {
    res.write(" welcome to Home Page");
    res.end();
  } else {
    res.write(
      `<div>
            <h1>Sorry</h1>
            <p>We cant find pages you looking for</p>
            <button><a href="/">Go Back</a></button>
        </div>`
    );
  }
});
server.listen(8000);
