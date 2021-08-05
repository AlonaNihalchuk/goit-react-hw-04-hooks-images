const API_KEY = "22623319-52f49cc6bb6df63b12d71d4de";
const BASE_URL = "https://pixabay.com/api/?";

const fetchPictures = (pictureName, page) =>
  fetch(
    `${BASE_URL}q=${pictureName}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error("there is no such a picture"));
  });

export default fetchPictures;
