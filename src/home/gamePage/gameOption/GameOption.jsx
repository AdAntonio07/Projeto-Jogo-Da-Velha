import Box from '../../../components/box/Box'
import Icon from '../../../components/icon/Icon'

function GameOption({ status, onClick, playerUm, playerDois }) {
  return (
    <Box>
      {status === 1 && <Icon iconName={playerUm} />}
      {status === -1 && <Icon iconName={playerDois} />}
    </Box>
  )
}

export default GameOption
