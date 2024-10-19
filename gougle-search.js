/*
 * Instructions

Create a function named queryServers that takes 2 arguments:

    serverName: a string of the name of the server.
    q: a string of the query given by the user.

You need to construct 2 urls which should work like this:

queryServers('pouet', 'hello+world')
// return the fastest of those 2 calls:
// -> getJSON('/pouet?q=hello+world')
// -> getJSON('/pouet_backup?q=hello+world')

Create a function named: gougleSearch that takes a single query argument (q). It must invoke queryServers concurrently on 3 servers:

    "web"
    "image"
    "video"

You must return the value from each server in an object using the server name as key.

A timeout of 80milliseconds must be set for the whole operation, if it is not complete within 80 milliseconds, then you must return Error('timeout').
Code provided

    The provided code will be added to your solution, and does not need to be submitted.

// fake `getJSON` function
let getJSON = async (url) => url

 */

async function queryServers(serverName, q) {
  const queryString = new URLSearchParams({ q }).toString();

  const urls = [
    getJSON(`/${serverName}?${queryString}`),
    getJSON(`/${serverName}_backup?${queryString}`),
  ];

  // Use Promise.race to return the fastest result
  return Promise.race(urls);
}

async function gougleSearch(q) {
  const servers = ["web", "image", "video"];

  const promises = servers.map((server) =>
    queryServers(server, q).catch(() => `Error fetching from ${server}`),
  );

  // Set a timeout for the entire operation
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("timeout")), 80),
  );

  try {
    const results = await Promise.race([Promise.all(promises), timeoutPromise]);
    return Object.fromEntries(
      servers.map((server, index) => [server, results[index]]),
    );
  } catch (error) {
    throw error;
  }
}
