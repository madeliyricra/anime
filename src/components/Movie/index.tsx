import { returnYear } from "constants/functions"
import { IMovie } from "interfaces"
import { Container, Duraction, Figure, Header, Image, Title, Year } from "./styled"

const App = ({
  movie,
  handleDetail
}: {
  movie: IMovie,
  handleDetail: (mal_id: number) => void
}) => {
  const {title, mal_id, duration, images, aired} = movie
  return (
    <Container onClick={() => handleDetail(mal_id)}>
      <Duraction>{duration}</Duraction>
      <Header>
        <Title>{title}</Title>
        <Year>{returnYear(aired.from)}</Year>
      </Header>
      <Figure>
        <Image src={images.webp.image_url} alt={title} />
      </Figure>
    </Container>
  )
}

export default App