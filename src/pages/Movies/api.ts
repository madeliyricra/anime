import { API } from "constants/envs";

export const getMovies = async (search: string) => {
  const URL = `${API}/anime?q=${search}&type=Movie`
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}