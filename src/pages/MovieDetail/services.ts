import { getMovieById } from "./api";

export const getMovieDetail = async ({
  mail_id,
  setCharacters,
  setLoading
}: {
  mail_id: string;
  setCharacters: Function;
  setLoading: Function;
}) => {
  try {
    setLoading(true);
    const response = await getMovieById(mail_id);

    setCharacters(response?.data || []);
    console.log(response?.data)
    
  } catch (error: any) {
    console.error("Error: ", error);

  } finally {
    setLoading(false);
  }
};
