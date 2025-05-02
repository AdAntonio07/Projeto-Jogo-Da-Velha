import styled from 'styled-components'
const Box = styled.div`
  width: ${(props) => props.size || '80px'};
  height: ${(props) => props.size || '80px'};
  border: 4px solid;
  border-color: ${(props) => props.theme.colors.purple};
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default Box
