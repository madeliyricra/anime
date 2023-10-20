interface IImage{
  webp: {
    image_url: string,
    small_image_url: string,
  },
  jpg: {
    image_url: string,
  }
}

interface IVoice{
  language: string,
  person: {
    mal_id: number,
    name: string,
    images: IImage
  }
}


interface ICharacter {
  mal_id: number
  about: string
  name: string
  name_kanji: string
  url: string
  images: IImage
  voices: IVoice[]
}


export default ICharacter;