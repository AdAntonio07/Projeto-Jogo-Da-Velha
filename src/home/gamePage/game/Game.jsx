import GameOption from '../gameOption/GameOption'

function Game(play1, play2) {
  return (
    <>
      <GameOption status={-1} playerUm={play1} playerDois={play2} />
      <GameOption status={1} />
      <GameOption status={-1} />
      <GameOption status={-1} />
      <GameOption status={-1} />
      <GameOption />
      <GameOption />
      <GameOption />
      <GameOption />
    </>
  )
}
export default Game
