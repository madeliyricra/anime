import ICharacter from "./character.interface";


interface IMovieDetail {
  mal_id: number
  role: string
  character: ICharacter
}

export default IMovieDetail;