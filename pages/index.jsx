import { useState } from 'react'

import Container from '../src/components/container/Container'
import Header from '../src/components/header/Header'
import ChosenIcon from '../src/home/selectIcon/chosenIcon/ChosenIcon'
import ChoosenIcon from '../src/home/selectIcon/chooseIcon/ChooseIcon'

function HomePage() {
  const [playUm, setPlayUm] = useState(null)
  const [playDois, setPlayDois] = useState(null)

  const handleIconClick = (iconName) => {
    if (!playUm) {
      setPlayUm(iconName)
    } else if (!playDois && playUm !== iconName) {
      setPlayDois(iconName)
    }
  }

  const ActivateButton = () => {
    if (playDois) return true
  }

  return (
    <Container>
      <Header />
      <ChosenIcon Play1={playUm} Play2={playDois} />
      <ChoosenIcon onSelectIcon={handleIconClick} disabled={!ActivateButton()} />
    </Container>
  )
}

export default HomePage
