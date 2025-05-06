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
`
const Column = styled.div`
  text-align: center;
`

function ChoosenIcon() {
  return (
    <>
      <AlighBoxIcon>
        <Column>
          <Box>
            <Icon iconName="Triangulo" />
          </Box>
          <P>Triangulo</P>
        </Column>
        <Column>
          <Box>
            <Icon iconName="Quadrado" />
          </Box>
          <P>Quadrado</P>
        </Column>
        <Column>
          <Box>
            <Icon iconName="Circulo" />
          </Box>
          <P>Circulo</P>
        </Column>
        <Column>
          <Box>
            <Icon iconName="X" />
          </Box>
          <P>X</P>
        </Column>
      </AlighBoxIcon>
      <Button width="130px" height="50px">
        Jogar
      </Button>
    </>
  )
}

export default ChoosenIcon
