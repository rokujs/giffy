const API_KEY = "YZP47vojNS62BiASpO59qDRfjx4E2iEX";

export default async function getGifs({ keyword = "meme" } = {}) {
  const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;

  try {
    const req = await fetch(API_URL);
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
