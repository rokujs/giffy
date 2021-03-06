import { API_KEY, API_URL } from "./setting";

export default async function getGifs({
  limit = 15,
  keyword = "meme",
  page = 0,
} = {}) {
  const url = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${
    page * limit
  }&rating=g&lang=en`;

  try {
    const req = await fetch(url);
    const { data } = await req.json();

    if (Array.isArray(data)) {
      const newData = data.map((info) => {
        const { url } = info.images.downsized_medium;
        const { title, id } = info;
        return { title, id, url };
      });

      return newData;
    }
  } catch (error) {
    console.error(error);
  }
}
