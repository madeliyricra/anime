
interface IImage{
  webp: {
    image_url: string,
    large_image_url: string,
    small_image_url: string,
  }
}

interface Igender{
  name: string
}

interface IAired{
  from: string
}

interface IMovie {
  mal_id: number
  title: string
  type: string
  duration: string
  score: number
  synopsis: string
  images: IImage
  genres: Igender[]
  aired: IAired
}

export default IMovie;