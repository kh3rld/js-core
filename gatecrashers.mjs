import http from "http";
import fs from "fs/promises";
import path from "path";

// Define the port for the server
const PORT = 5000;

// Use environment variable TEST_TMP_PATH to get the base directory, default to current working directory
const BASE_DIR = process.env.TEST_TMP_PATH || process.cwd();

// Authorized users with their passwords
const authorizedUsers = {
  Caleb_Squires: "abracadabra",
  Tyrique_Dalton: "abracadabra",
  Rahima_Young: "abracadabra",
};

// Function to parse the Authorization header
function parseAuthHeader(authHeader) {
  if (!authHeader || !authHeader.startsWith("Basic ")) return null;

  // Decode base64 credentials and split into username and password
  const credentials = authHeader.slice(6); // Remove 'Basic ' prefix
  const [username, password] = Buffer.from(credentials, "base64")
    .toString()
    .split(":");

  return { username, password };
}

// Create the server
const server = http.createServer((req, res) => {
  // Parse and check the Authorization header
  const auth = parseAuthHeader(req.headers.authorization);

  if (
    !auth ||
    !authorizedUsers[auth.username] ||
    authorizedUsers[auth.username] !== auth.password
  ) {
    // Respond with 401 Unauthorized if credentials are invalid
    res.writeHead(401, {
      "Content-Type": "application/json",
      "WWW-Authenticate": 'Basic realm="Restricted Area"',
    });
    res.end(JSON.stringify({ error: "Authorization Required" }));
    return;
  }

  if (req.method === "POST") {
    let body = "";

    // Collect data from the request body
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", async () => {
      try {
        // Use default guest data if no body is provided
        if (!body) {
          body = JSON.stringify({
            answer: "yes",
            drink: "juice",
            food: "pizza",
          });
        }

        const guestName = req.url.slice(1); // Extract guest name from URL
        const guestData = JSON.parse(body); // Parse the guest data

        // Create 'guests' directory if it doesn't exist
        const guestsDir = path.join(BASE_DIR, "guests");
        await fs.mkdir(guestsDir, { recursive: true });

        // Save guest data to a file
        const filePath = path.join(guestsDir, `${guestName}.json`);
        await fs.writeFile(filePath, JSON.stringify(guestData, null, 2));

        // Respond with the saved guest data
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(guestData));
      } catch (error) {
        console.error("Error:", error);
        // Respond with 500 Internal Server Error for any issues
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Internal Server Error" }));
      }
    });
  } else {
    // Respond with 405 Method Not Allowed for non-POST requests
    res.writeHead(405, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Method not allowed" }));
  }
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
