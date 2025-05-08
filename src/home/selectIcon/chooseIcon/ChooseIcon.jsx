import styled from 'styled-components'
import Box from '../../../components/box/Box'
import Icon from '../../../components/icon/Icon'
import Button from '../../../components/button/Button'

const AlighBoxIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin: 30px 0 30px 0;
  text-align: center;
`
const P = styled.p`
  color: ${(props) => props.theme.colors.purple};
  margin-top: 8px;
  font-size: 20px;
  font-weight: 600;
`
const Column = styled.div`
  text-align: center;
`
const BoxIcon = styled(Box)`
  cursor: pointer;
`

function ChoosenIcon({ onSelectIcon, onClick, disabled }) {
  const handleIconClick = (iconName) => {
    onSelectIcon(iconName)
  }

  return (
    <>
      <AlighBoxIcon>
        <Column>
          <BoxIcon onClick={() => handleIconClick('Triangulo')}>
            <Icon iconName="Triangulo" />
          </BoxIcon>
          <P>Triangulo</P>
        </Column>
        <Column>
          <BoxIcon onClick={() => handleIconClick('Quadrado')}>
            <Icon iconName="Quadrado" />
          </BoxIcon>
          <P>Quadrado</P>
        </Column>
        <Column>
          <BoxIcon onClick={() => handleIconClick('Circulo')}>
            <Icon iconName="Circulo" />
          </BoxIcon>
          <P>Circulo</P>
        </Column>
        <Column>
          <BoxIcon onClick={() => handleIconClick('X')}>
            <Icon iconName="X" />
          </BoxIcon>
          <P>X</P>
        </Column>
      </AlighBoxIcon>
      <Button onClick={onClick} disabled={disabled} width="130px" height="50px">
        Jogar
      </Button>
    </>
  )
}

export default ChoosenIcon
