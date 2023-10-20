import * as colors from 'constants/colors';
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  gap: 20px;
  color: ${colors.neutral02};
  padding: 20px 0;
`


export const DetailContainer = styled.div`
  display: grid;
  gap: 10px;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`

export const Information = styled.section`
  display: flex;
  gap: 10px;
  p{
    margin: 5px 0;
  }
`

export const CharacterContainer = styled.section`
  
`

export const CharacterList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
`

export const RecommendationsContainer = styled.section`

`

export const Recommendations = styled.div`
  display: grid;
  gap: 1.5rem;
  @media (min-width: 480px) {
    grid-template-columns: repeat(2, minmax(0px, 1fr));
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0px, 1fr));
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(5, minmax(0px, 1fr));
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(6, minmax(0px, 1fr));
  }
`

export const Title = styled.h2`
  font-size: 1.5rem;
  margin: 1rem 0;
  color: ${colors.neutral02}
`