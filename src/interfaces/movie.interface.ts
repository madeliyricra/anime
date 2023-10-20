
interface IMovie {
  mal_id: number
  title: string
  type: string
  duration: string
  score: number
  synopsis: string
  image: string
  genres: Igender[]
}

interface Igender{
  name: string
}

export default IMovie;