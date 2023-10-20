import * as colors from 'constants/colors';
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid transparent;
  &:hover {
    border-color: ${colors.neutral02};
  }
`

export const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  object-fit: cover;
`

export const Name = styled.p`
  margin: 0;
  font-size: 13px;
  font-weight: 600;
  color: ${colors.neutral02};
`

export const Role = styled.span`
  color: ${colors.neutral02};
  font-size: 11px;
`