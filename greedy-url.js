function getURL(str) {
  const urlPattern = /https?:\/\/[^\s]+/g;
  return str.match(urlPattern) || [];
}

function greedyQuery(str) {
  const urlPattern = /https?:\/\/[^\s?]+(\?[^\s&]+&[^\s&]+&[^\s&]+)/g;
  return str.match(urlPattern) || [];
}

function notSoGreedy(str) {
  const urlPattern = /https?:\/\/[^\s?]+(\?[^\s&]+&[^\s&]+)/g;
  const allUrls = str.match(urlPattern) || [];
  return allUrls.filter((url) => {
    const queryParams = (url.split("?")[1] || "").split("&");
    return queryParams.length >= 2 && queryParams.length <= 3;
  });
}

const str = `
    qqq http:// qqqq 
    qqqqq https://something.com/hello 
    qqqqqqq qhttp://example.com/hello?you=something&something=you 
    qhttp://example.com/hello?param1=value1&param2=value2&param3=value3 
    http://example.com/path?paramA=valueA&paramB=valueB
`;

console.log(getURL(str));
console.log(greedyQuery(str));
console.log(notSoGreedy(str));
