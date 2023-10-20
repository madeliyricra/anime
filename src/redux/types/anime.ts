import { IMovie } from "interfaces";

interface IAnimeState {
  loading: boolean,
  search: string,
  movies: IMovie[],
}

export default IAnimeState