import * as colors from 'constants/colors';
import styled from "styled-components";

export const Container = styled.main`
`

export const MoviesContainer = styled.section`
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

export const Search = styled.input`
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  background: #31313182;
  font-size: 15px;
  border: 1px solid ${colors.neutral02};
  color: ${colors.neutral02};
`