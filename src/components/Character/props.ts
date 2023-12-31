interface IImage{
  webp: {
    image_url: string,
    small_image_url: string,
  }
}


interface ICharacter {
  mal_id: number
  name: string
  url: string
  images: IImage
}

export interface ICharacterDetail {
  role: string
  character: ICharacter
}
