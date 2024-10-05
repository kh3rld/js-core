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
