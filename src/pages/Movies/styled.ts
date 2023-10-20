import * as colors from 'constants/colors';
import styled from "styled-components";

export const Container = styled.main`
`

export const MoviesContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(6, minmax(0px, 1fr));
  gap: 1.5rem;
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