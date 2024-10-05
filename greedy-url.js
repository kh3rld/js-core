function getURL(dataSet) {
  const urlRegex = /https?:\/\/[^\s]+/g;
  return dataSet.match(urlRegex) || [];
}

function greedyQuery(dataSet) {
  const greedyQueryRegex = /https?:\/\/[^\s?]+(\?[^\s#]*){3,}/g;
  return dataSet.match(greedyQueryRegex) || [];
}

function notSoGreedy(dataSet) {
  const notSoGreedyRegex = /https?:\/\/[^\s?]+(\?[^\s#]*){2,3}/g;
  return dataSet.match(notSoGreedyRegex) || [];
}
