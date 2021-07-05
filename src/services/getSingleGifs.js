import { API_KEY, API_URL } from "./setting";

const fromApiResponseToGifs = (apiRes) => {
  const { data } = apiRes;

  if (Array.isArray(data)) {
    const { url } = data.images.downsized_medium;
    const { title, id } = data;
    return { title, id, url };
  }
};

function getSingleGif({ id }) {
  return fetch(`${API_URL}/gifs/${id}?api_key=${API_KEY}`)
    .then((res) => res.json())
    .then(fromApiResponseToGifs);
}

export default getSingleGif;
