import * as colors from "constants/colors";
import styled from "styled-components";

export const Container = styled.div`
  color: ${colors.neutral02};
  padding: 20px 0;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  margin: 1rem 0;
  color: ${colors.neutral02};
`;

export const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: contain;
  border-radius: 5px;
`

export const About = styled.section`
  display: grid;
  gap: 15px;
  @media (min-width: 768px) {
    grid-template-columns: auto 1fr;
  }
`;

export const Information = styled.article``;

export const VoiceList = styled.section`
  display: grid;
  gap: 1.5rem;
  @media (min-width: 480px) {
    grid-template-columns: repeat(2, minmax(0px, 1fr));
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0px, 1fr));
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, minmax(0px, 1fr));
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(5, minmax(0px, 1fr));
  }
`;

export const Voice = styled.article`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  color: ${colors.neutral02};
`;

export const VoiceImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  object-fit: cover;
`;

export const VoiceInformation = styled.div`
  display: flex;
  flex-direction: column;
  p {
    margin: 0;
    font-size: 14px;
    font-weight: 600;
  }
  span {
    font-size: 12px;
    font-weight: 400;
  }
`;
