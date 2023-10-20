import { ILayout } from "./props";
import { Body, Container, Header, Title } from "./styles";

const App = ({ title, children }: ILayout) => {
  return (
    <Container>
      <Header>
        <Title>
          <h1>{title}</h1>
        </Title>
      </Header>
      <Body>
        {children}
      </Body>
    </Container>
  );
};

export default App;
