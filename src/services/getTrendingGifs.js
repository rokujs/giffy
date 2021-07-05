import { API_KEY, API_URL } from "./setting";

export default async function getTrendingGifs() {
  const url = `${API_URL}/trending/searches?api_key=${API_KEY}`;

  try {
    const req = await fetch(url);
    const { data = [] } = await req.json();

    return data;
  } catch (error) {
    console.error(error);
  }
}
