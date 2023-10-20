import { API } from "constants/envs";

export const getMovieById = async (mail_id: string) => {
  const URL = `${API}/anime/${mail_id}/characters`
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}