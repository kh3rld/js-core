import http from "http";
import fs from "fs";
import path from "path";

const PORT = 5000;
const GUESTS_DIR = "guests";

// Create the guests directory if it doesn't exist
if (!fs.existsSync(GUESTS_DIR)) {
  fs.mkdirSync(GUESTS_DIR);
}

// Create the HTTP server
const server = http.createServer((req, res) => {
  const { method, url } = req;

  // Handle only POST requests
  if (method === "POST") {
    const pathname = new URL(url, `http://localhost:${PORT}`).pathname;
    const filename = path.join(GUESTS_DIR, pathname.slice(1) + ".json"); // Create path for the JSON file

    let body = "";

    // Collect the data from the request
    req.on("data", (chunk) => {
      body += chunk.toString(); // Convert Buffer to string
    });

    req.on("end", () => {
      // Attempt to write the JSON data to a file
      try {
        fs.writeFileSync(filename, body); // Write JSON to a file
        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(body); // Send the original data back as response
      } catch (error) {
        // If an error occurs, respond with a 500 error
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "server failed" }));
      }
    });
  } else {
    // Handle other request methods
    res.writeHead(405, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Method Not Allowed" }));
  }
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
