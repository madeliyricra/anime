import { returnYear } from "constants/functions";
import { IMovie } from "interfaces";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Duraction,
  Figure,
  Header,
  Image,
  Title,
  Year,
} from "./styled";

const App = ({
  movie,
}: {
  movie: IMovie;
}) => {
  const navigate = useNavigate();

  const { title, mal_id, duration, images, aired } = movie;

  const handleDetail = (mal_id: number) => {
    navigate(`/anime/${mal_id}`);
  };
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
  );
};

export default App;
