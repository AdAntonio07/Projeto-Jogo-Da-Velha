import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 100vh;
  padding: 20px 0;
`

function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>
}

export default Container
