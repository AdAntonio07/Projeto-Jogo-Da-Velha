import { useState } from 'react'

import Container from '../src/components/container/Container'
import Header from '../src/components/header/Header'
import ChosenIcon from '../src/home/selectIcon/chosenIcon/ChosenIcon'
import ChoosenIcon from '../src/home/selectIcon/chooseIcon/ChooseIcon'
import Game from '../src/home/gamePage/game/Game'

function HomePage() {
  const [playUm, setPlayUm] = useState(null)
  const [playDois, setPlayDois] = useState(null)
  const [invisible, setInvisible] = useState(false)

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

  const handleClick = () => {
    if (playDois) {
      setInvisible(true)
    }
  }

  return (
    <Container>
      <Header />
      {!invisible && <ChosenIcon Play1={playUm} Play2={playDois} />}
      {!invisible && (
        <ChoosenIcon
          onClick={handleClick}
          onSelectIcon={handleIconClick}
          disabled={!ActivateButton()}
        />
      )}
      {invisible && <Game play1={playUm} play2={playDois} />}
    </Container>
  )
}

export default HomePage
