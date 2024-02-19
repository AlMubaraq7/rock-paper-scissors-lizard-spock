import {
  Container,
  PentagonImg,
  ScissorsGrad,
  PickImg,
  PaperGrad,
  RockGrad,
  LizardGrad,
  SpockGrad,
} from "./choice.styles"

import Pentagon from "../../assets/bg-pentagon.svg"
import Scissors from "../../assets/icon-scissors.svg"
import Paper from "../../assets/icon-paper.svg"
import Rock from "../../assets/icon-rock.svg"
import Lizard from "../../assets/icon-lizard.svg"
import Spock from "../../assets/icon-spock.svg"
import { useAppDispatch } from "../../app/hooks"
import { setPlayerPick } from "../../redux/logicSlice"
const Choice = () => {
  const dispatch = useAppDispatch()
  const setChoice = (e: React.BaseSyntheticEvent) => {
    dispatch(setPlayerPick(e.currentTarget.getAttribute("data-id")))
  }
  return (
    <Container>
      <PentagonImg src={Pentagon} />
      <ScissorsGrad data-id="scissors" to="/result" onClick={setChoice}>
        <PickImg src={Scissors} data-id="scissors" />
      </ScissorsGrad>
      <PaperGrad data-id="paper" to="/result" onClick={setChoice}>
        <PickImg src={Paper} data-id="paper" />
      </PaperGrad>
      <RockGrad data-id="rock" to="/result" onClick={setChoice}>
        <PickImg src={Rock} data-id="rock" />
      </RockGrad>
      <LizardGrad data-id="lizard" to="/result" onClick={setChoice}>
        <PickImg src={Lizard} data-id="lizard" />
      </LizardGrad>
      <SpockGrad data-id="spock" to="/result" onClick={setChoice}>
        <PickImg src={Spock} data-id="spock" />
      </SpockGrad>
    </Container>
  )
}

export default Choice
