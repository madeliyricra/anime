import { actionSetLoading, actionSetMovies } from "redux/actions/anime";
import { getMovies } from "./api";

export const handleMovies = async ({
  search
}: {
  search: string;
}) => {
  try {
    actionSetLoading(true);
    const response = await getMovies(search);
    
    actionSetMovies(response?.data || []);
    
  } catch (error: any) {
    console.error("Error: ", error);

  } finally {
    actionSetLoading(false);
  }
};
