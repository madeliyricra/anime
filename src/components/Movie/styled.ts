import * as colors from 'constants/colors';
import styled from "styled-components";

export const Container = styled.article`
  position: relative;
  color: rgb(255, 253, 253);
  cursor: pointer;
  height: 350px;
  transition: box-shadow 0.3s ease 0s;
`

export const Header = styled.div`
  position: absolute;
  padding: 1rem;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 3;
`

export const Title = styled.h2`
  font-size: 16px;
  line-height: 1.2;
  margin: 0;
`

export const Year = styled.span`

`

export const Figure = styled.figure`
  &::before{
    content: " ";
    position: absolute;
    left: 0px;
    width: 100%;
    object-fit: cover;
    border-radius: inherit;
    background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%);
    height: 80%;
    top: auto;
    bottom: 0px;
    z-index: 2;
  }
`

export const Image = styled.img`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
  z-index: 1;
`

export const Duraction = styled.span`
  display: block;
  width: 90px;
  padding: 5px;
  text-align: center;
  position: absolute;
  top: 10px;
  left: 10px;
  line-height: 1.2;
  border-radius: 5px;
  font-size: 12px;
  background-color: ${colors.primary02};
  z-index: 3;
`