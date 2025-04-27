import styled from 'styled-components'

import Icon from '../icon/Icon'

const AlignItem = styled.div`
  max-width: 680px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  padding: 0 10px;

  @media screen and (max-width: 430px) {
    margin-bottom: 30px;
  }
`
const P = styled.p`
  color: ${(props) => props.theme.colors.purple};
  font-weight: bolder;
  font-size: 20px;
  position: absolute;
  margin-top: 90px;

  @media screen and (max-width: 430px) {
    font-size: 13px;
    margin-top: 50px;
  }
`
function Header() {
  return (
    <AlignItem>
      <Icon iconName="Title" size="100%" />
      <P>Criado por Antonio Ferreira</P>
    </AlignItem>
  )
}

export default Header
