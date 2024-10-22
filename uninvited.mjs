import http from "http";
import fs from "fs";
import { URL } from "url";

const PORT = 5000;

// Create the HTTP server
const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === "POST") {
    const pathname = new URL(url, `http://localhost:${PORT}`).pathname;
    const filename = pathname.slice(1) + ".json"; // Remove leading '/' and add .json

    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString(); // Convert Buffer to string
    });

    req.on("end", () => {
      try {
        fs.writeFileSync(filename, body); // Write JSON to a file
        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(body); // Send the original data back as response
      } catch (error) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "server failed" }));
      }
    });
  } else {
    res.writeHead(405, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Method Not Allowed" }));
  }
});

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
