/*
 * Instructions

In this exercise, we will focus on building complex async flows with promises.

Create a function named getJSON with two parameters:

    path: a URL called by your function.
    params: optional query parameters that will be appended to the path.

getJSON must construct a valid url with the path and stringified params, and use fetch to fulfil the request.

If the response is not OK, getJSON must throw an error using the response status text.

The response body must then be read and parsed from JSON.

The parsed object contains one of those 2 properties:

    "data": the actual data to return.
    "error": the error message to throw.
*/

async function getJSON(path, params = {}) {
  const queryString = new URLSearchParams(params).toString();
  const url = queryString ? `${path}?${queryString}` : path;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();

  if (data.error) {
    throw new Error(data.error);
  }

  return data.data; // Return the actual data
}
