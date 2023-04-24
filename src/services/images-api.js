const API_KEY = '14836280-095028a335045ad546bd82bf5';
const URL = 'pixabay.com/api/';
const PER_PAGE = 12;

function fetchImageByQuery(query, page) {
  return fetch(
    `https://${URL}?key=${API_KEY}&q=${query}&image_type=photo&page=${page}&per_page=${PER_PAGE}`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(
      new Error(`Sorry, we have no images with name ${query}.`)
    );
  });
}
const api = {
  fetchImageByQuery,
  PER_PAGE,
};
export default api;
