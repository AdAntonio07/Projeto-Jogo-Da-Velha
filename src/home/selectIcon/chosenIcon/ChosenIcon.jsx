import styled from 'styled-components'
import Box from '../../../components/box/Box'
import Icon from '../../../components/icon/Icon'

const BoxAligh = styled.div`
  display: flex;
  align-items: center;
  gap: 150px;
  margin-top: 30px;
`
const Column = styled.div`
  text-align: center;
`
const H2 = styled.h2`
  color: ${(props) => props.theme.colors.purple};
  margin-top: 7px;
  font-size: 28px;
`
const H1 = styled.h1`
  color: ${(props) => props.theme.colors.green};
  margin-top: 30px;
`

function ChosenIcon({ Play1, Play2 }) {
  return (
    <>
      <BoxAligh>
        <Column>
          <Box size="120px">{Play1 && <Icon iconName={Play1} size="100px" />}</Box>
          <H2>Play 1</H2>
        </Column>
        <Column>
          <Box size="120px">{Play2 && <Icon iconName={Play2} size="100px" />}</Box>
          <H2>Play 2</H2>
        </Column>
      </BoxAligh>
      {!Play1 && <H1>Escolher o icone do Play 1</H1>}
      {Play1 && !Play2 && <H1>Escolher o icone do Play 2</H1>}
      {Play2 && <H1>Vamos jogar!</H1>}
    </>
  )
}

export default ChosenIcon
