import {
  Container,
  Box,
  StatusBox,
  Text,
  Empty,
  ScissorsGrad,
  PaperGrad,
  LizardGrad,
  SpockGrad,
  RockGrad,
  PickImg,
  Status,
  StatusLink,
} from "./result.styles"
import Scissors from "../../assets/icon-scissors.svg"
import Paper from "../../assets/icon-paper.svg"
import Rock from "../../assets/icon-rock.svg"
import Lizard from "../../assets/icon-lizard.svg"
import Spock from "../../assets/icon-spock.svg"
import { useEffect, useState } from "react"
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import {
  selectPlayerPick,
  selectStatus,
  setStatus,
  incrementScore,
  decrementScore,
  selectHousePick,
  setHousePick,
  ensureNonNegative,
} from "../../redux/logicSlice"
const Result = () => {
  const [loading, setLoading] = useState(true)
  const dispatch = useAppDispatch()
  const HousePick = () => {
    const choices = ["rock", "paper", "scissors", "lizard", "spock"]
    const random = Math.floor(Math.random() * 5)
    dispatch(setHousePick(choices[random]))
  }
  const playerPick = useAppSelector(selectPlayerPick)
  const housePick = useAppSelector(selectHousePick)
  const status = useAppSelector(selectStatus)

  useEffect(() => {
    HousePick()
  }, [])

  const Outcome = () => {
    //ROCK
    if (playerPick === "rock" && housePick === "scissors") {
      dispatch(setStatus("win"))
      dispatch(incrementScore())
    } else if (playerPick === "rock" && housePick === "lizard") {
      dispatch(setStatus("win"))
      dispatch(incrementScore())
    } else if (playerPick === "rock" && housePick === "paper") {
      dispatch(setStatus("lose"))
      dispatch(decrementScore())
    } else if (playerPick === "rock" && housePick === "spock") {
      dispatch(setStatus("lose"))
      dispatch(decrementScore())
    }
    //PAPER
    else if (playerPick === "paper" && housePick === "rock") {
      dispatch(setStatus("win"))
      dispatch(incrementScore())
    } else if (playerPick === "paper" && housePick === "spock") {
      dispatch(setStatus("win"))
      dispatch(incrementScore())
    } else if (playerPick === "paper" && housePick === "scissors") {
      dispatch(setStatus("lose"))
      dispatch(decrementScore())
    } else if (playerPick === "paper" && housePick === "lizard") {
      dispatch(setStatus("lose"))
      dispatch(decrementScore())
    }
    //SCISSORS
    else if (playerPick === "scissors" && housePick === "paper") {
      dispatch(setStatus("win"))
      dispatch(incrementScore())
    } else if (playerPick === "scissors" && housePick === "lizard") {
      dispatch(setStatus("win"))
      dispatch(incrementScore())
    } else if (playerPick === "scissors" && housePick === "rock") {
      dispatch(setStatus("lose"))
      dispatch(decrementScore())
    } else if (playerPick === "scissors" && housePick === "spock") {
      dispatch(setStatus("lose"))
      dispatch(decrementScore())
    }
    // LIZARD
    else if (playerPick === "lizard" && housePick === "paper") {
      dispatch(setStatus("win"))
      dispatch(incrementScore())
    } else if (playerPick === "lizard" && housePick === "spock") {
      dispatch(setStatus("win"))
      dispatch(incrementScore())
    } else if (playerPick === "lizard" && housePick === "rock") {
      dispatch(setStatus("lose"))
      dispatch(decrementScore())
    } else if (playerPick === "lizard" && housePick === "scissors") {
      dispatch(setStatus("lose"))
      dispatch(decrementScore())
    }
    //SPOCK
    else if (playerPick === "spock" && housePick === "scissors") {
      dispatch(setStatus("win"))
      dispatch(incrementScore())
    } else if (playerPick === "spock" && housePick === "rock") {
      dispatch(setStatus("win"))
      dispatch(incrementScore())
    } else if (playerPick === "spock" && housePick === "lizard") {
      dispatch(setStatus("lose"))
      dispatch(decrementScore())
    } else if (playerPick === "spock" && housePick === "paper") {
      dispatch(setStatus("lose"))
      dispatch(decrementScore())
    } else {
      dispatch(setStatus("draw"))
    }
  }

  useEffect(() => {
    Outcome()
    let timer = setTimeout(() => {
      setLoading(false)
    }, 1500)
    dispatch(ensureNonNegative())
    return () => {
      clearTimeout(timer)
    }
  }, [housePick])

  function playerPickRender() {
    if (playerPick === "rock") {
      return (
        <RockGrad>
          <PickImg src={Rock} />
        </RockGrad>
      )
    } else if (playerPick === "paper") {
      return (
        <PaperGrad>
          <PickImg src={Paper} />
        </PaperGrad>
      )
    } else if (playerPick === "scissors") {
      return (
        <ScissorsGrad>
          <PickImg src={Scissors} />
        </ScissorsGrad>
      )
    } else if (playerPick === "lizard") {
      return (
        <LizardGrad>
          <PickImg src={Lizard} />
        </LizardGrad>
      )
    } else {
      return (
        <SpockGrad>
          <PickImg src={Spock} />
        </SpockGrad>
      )
    }
  }
  function housePickRender() {
    if (housePick === "rock") {
      return (
        <RockGrad>
          <PickImg src={Rock} />
        </RockGrad>
      )
    } else if (housePick === "paper") {
      return (
        <PaperGrad>
          <PickImg src={Paper} />
        </PaperGrad>
      )
    } else if (housePick === "scissors") {
      return (
        <ScissorsGrad>
          <PickImg src={Scissors} />
        </ScissorsGrad>
      )
    } else if (housePick === "lizard") {
      return (
        <LizardGrad>
          <PickImg src={Lizard} />
        </LizardGrad>
      )
    } else {
      return (
        <SpockGrad>
          <PickImg src={Spock} />
        </SpockGrad>
      )
    }
  }

  return (
    <Container>
      <Box>
        <Text>You picked</Text>
        {playerPickRender()}
      </Box>
      <StatusBox>
        {loading ? "" : status === "win" && <Status>You win</Status>}
        {loading ? "" : status === "lose" && <Status>You lose</Status>}
        {loading ? "" : status === "draw" && <Status>Draw</Status>}
        {loading ? (
          ""
        ) : (
          <StatusLink to="/" onClick={() => dispatch(setHousePick(""))}>
            Play again
          </StatusLink>
        )}
      </StatusBox>
      <Box>
        <Text>The House picked</Text>
        {loading ? "" : housePickRender()}
      </Box>
    </Container>
  )
}

export default Result
