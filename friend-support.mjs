import { createServer } from "http";
import { readFile } from "fs/promises";
import { join } from "path";

// Helper function to send JSON responses
const sendJsonResponse = (res, statusCode, data) => {
  res.writeHead(statusCode, { "Content-Type": "application/json" });
  res.end(JSON.stringify(data));
};

const server = createServer(async (req, res) => {
  if (req.method === "GET") {
    const guestName = req.url.slice(1);

    if (guestName) {
      const filePath = join(process.cwd(), "guests", `${guestName}.json`);

      try {
        const fileContent = await readFile(filePath, "utf-8");
        const guestData = JSON.parse(fileContent);
        sendJsonResponse(res, 200, guestData);
      } catch (error) {
        if (error.code === "ENOENT") {
          sendJsonResponse(res, 404, { error: "guest not found" });
        } else {
          sendJsonResponse(res, 500, { error: "server failed" });
        }
      }
    } else {
      sendJsonResponse(res, 404, { error: "guest not found" });
    }
  } else {
    sendJsonResponse(res, 405, { error: "Method Not Allowed" });
  }
});

const port = 5000;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
