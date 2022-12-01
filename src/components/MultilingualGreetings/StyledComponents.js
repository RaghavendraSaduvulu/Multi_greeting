import styled from 'styled-components'

export const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  font-family: roboto;
  font-weight: 500;
  font-size: 30px;
  color: #1e293b;
`

export const ButtonsList = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-direction: row;
`

export const ListItem = styled.li`
  padding: 25px;
`

export const LanguageBtn = styled.button`
  height: 35px;
  width: 90px;
  border-radius: 20px;
  border: 1px solid #db1c48;
  outline: none;
  font-family: roboto;
  font-weight: 400;
  font-size: 16px;
  background-color: ${props =>
    props.active === 'true' ? '#db1c48' : 'transparent'};
  color: ${props => (props.active === 'true' ? '#ffffff' : '#db1c48')};
`

export const LanguageImg = styled.img`
  width: 20%;
  @media screen and (max-width: 767px) {
    width: 40%;
  }
`
