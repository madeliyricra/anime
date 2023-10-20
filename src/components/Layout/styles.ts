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
  padding: 10px 2% 10px;
  max-width: 100%;
  h1{
    font-size: 30px;
    font-weight: 600;
    text-align: center;
    line-height: 1.4;
    margin: 0;
  }
`

export const Header = styled.header`
  background-color: ${colors.primary02};
  color: ${colors.neutral02};
  position: sticky;
  top: 0;
  z-index: 9999;
`