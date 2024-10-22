import http from "http";
import fs from "fs/promises";
import { parse } from "path";

const PORT = 5000;

// Function to handle incoming requests
const requestHandler = async (req, res) => {
  const guestName = req.url.slice(1); // Remove the leading '/'

  if (req.method === "GET") {
    try {
      // Attempt to read the corresponding guest JSON file
      const filePath = `./${guestName}.json`; // Assume files are named like "Elis_Galindo.json"
      const data = await fs.readFile(filePath, "utf-8");
      const jsonResponse = JSON.parse(data);

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(jsonResponse));
    } catch (error) {
      if (error.code === "ENOENT") {
        // File not found
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "guest not found" }));
      } else {
        // Server error
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "server failed" }));
      }
    }
  } else {
    // Method not allowed
    res.writeHead(405, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Method not allowed" }));
  }
};

// Create the HTTP server
const server = http.createServer(requestHandler);

// Start the server
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
