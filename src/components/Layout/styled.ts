import * as colors from 'constants/colors'
import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  background-color: ${colors.primary01};
`

export const Body = styled.section`
  padding: 0 30px 50px 30px;
  min-width: 240px;
  min-height: 100vh;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`

export const Title = styled.section`
  position: relative;
  padding: 10px;
  max-width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  h1{
    font-size: 30px;
    font-weight: 600;
    text-align: center;
    line-height: 1.4;
    margin: 0;
  }
`

export const BackButton = styled.button`
  position: absolute;
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  background: transparent;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  border: 1px solid ${colors.neutral02};
  &:hover{
    background: #1d1b234f;
  }
`

export const Header = styled.header`
  background-color: ${colors.primary02};
  color: ${colors.neutral02};
  position: sticky;
  top: 0;
  z-index: 9999;
  min-height: 60px;
`