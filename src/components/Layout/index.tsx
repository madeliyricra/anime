import { useNavigate } from "react-router-dom";
import { ILayout } from "./props";
import { BackButton, Body, Container, Header, Title } from "./styled";

const Layout = ({ title, children, backPath }: ILayout) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (backPath) navigate(backPath);
  };

  return (
    <Container>
      <Header>
        <Title>
          {backPath && (
            <BackButton onClick={handleBack}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 1024 1024"
              >
                <path
                  fill="#fff"
                  d="M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z"
                />
              </svg>
            </BackButton>
          )}
          <h1>{title}</h1>
        </Title>
      </Header>
      <Body>{children}</Body>
    </Container>
  );
};

export default Layout;
