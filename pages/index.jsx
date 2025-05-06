import Container from '../src/components/container/Container'
import Header from '../src/components/header/Header'
import ChosenIcon from '../src/home/selectIcon/chosenIcon/ChosenIcon'
import ChoosenIcon from '../src/home/selectIcon/chooseIcon/ChooseIcon'

function HomePage() {
  return (
    <Container>
      <Header />
      <ChosenIcon />
      <ChoosenIcon />
    </Container>
  )
}

export default HomePage
