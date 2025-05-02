import styled from 'styled-components'
import Box from '../../../components/box/Box'

const BoxAligh = styled.div`
  display: flex;
  align-items: center;
  gap: 170px;
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

function ChosenIcon() {
  return (
    <>
      <BoxAligh>
        <Column>
          <Box size="120px" />
          <H2>Play 1</H2>
        </Column>
        <Column>
          <Box size="120px" />
          <H2>Play 2</H2>
        </Column>
      </BoxAligh>
      <H1>Escolher icone do Play 1</H1>
    </>
  )
}

export default ChosenIcon
