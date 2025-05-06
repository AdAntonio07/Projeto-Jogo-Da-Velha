import styled from 'styled-components'

const StyledButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 8px;
  font-size: 30px;
  font-weight: bolder;
  border: 3px solid;
  cursor: pointer;
  color: ${(props) => props.theme.colors.green};
  background-color: ${(props) => props.theme.colors.purple};

  &:disabled {
    cursor: default;
    color: #256240;
    background-color: #3a1844;
  }
`

function Button({ onClick, disabled, children, width, height }) {
  return (
    <StyledButton onClick={onClick} disabled={disabled} width={width} height={height}>
      {children}
    </StyledButton>
  )
}

export default Button
