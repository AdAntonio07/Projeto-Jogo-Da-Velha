import styled from 'styled-components'
import Box from '../../../components/box/Box'
import Icon from '../../../components/icon/Icon'
import Button from '../../../components/button/Button'
import { ArrayIcon } from '../arrayIcon/ArrayIcon'

const AlighBoxIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  margin: 30px auto 30px auto;
`
const P = styled.p`
  color: ${(props) => props.theme.colors.purple};
  margin-top: 8px;
  font-size: 20px;
  font-weight: 600;
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const BoxIcon = styled(Box)`
  cursor: pointer;
`

function ChoosenIcon({ onSelectIcon, onClick, disabled }) {
  const listIcon = ArrayIcon

  const handleIconClick = (iconName) => {
    onSelectIcon(iconName)
  }

  return (
    <>
      <AlighBoxIcon>
        {listIcon.map((icon, pos) => (
          <Column key={`list-${pos}`}>
            <BoxIcon onClick={() => handleIconClick(icon.img)}>
              <Icon iconName={icon.img} />
            </BoxIcon>
            <P>{icon.name}</P>
          </Column>
        ))}
      </AlighBoxIcon>
      <Button onClick={onClick} disabled={disabled} width="130px" height="50px">
        Jogar
      </Button>
    </>
  )
}

export default ChoosenIcon
