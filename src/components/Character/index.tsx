
import { useNavigate } from "react-router-dom";
import { ICharacterDetail } from "./props";
import { Container, Image, Name, Role } from "./styled";

const App = ({
  characterDetail,
  movieId,
}:{
  characterDetail: ICharacterDetail,
  movieId: number
}) => {
  const navigate = useNavigate();
  const { role, character } = characterDetail

  const handleDetail = () => {
    navigate(`/anime/${movieId}/character/${character.mal_id}`);
  };

  return (
    <Container onClick={handleDetail}>
      <Image src={character.images.webp.image_url} alt={character.name} />
      <div>
        <Name>{character.name}</Name>
        <Role>{role}</Role>
      </div>
    </Container>
  )
}

export default App