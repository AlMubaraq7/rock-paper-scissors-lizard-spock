import {
  Container,
  FlexBox,
  TitleBox,
  Title,
  ScoreBox,
  ScoreContainer,
  ScoreTitle,
  ScoreValue,
} from "./header.styles"
import { useEffect, useState } from "react"
import { useAppSelector } from "../../app/hooks"
import { selectScore, selectPlayerPick } from "../../redux/logicSlice"
const Header = () => {
  const [loading, setLoading] = useState(true)
  const score = useAppSelector(selectScore)
  const playerPick = useAppSelector(selectPlayerPick)
  useEffect(() => {
    let timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => {
      clearTimeout(timer)
    }
  }, [playerPick])
  return (
    <Container>
      <FlexBox>
        <TitleBox>
          <Title>Rock</Title>
          <Title>Paper</Title>
          <Title>Scissors</Title>
          <Title>Lizard</Title>
          <Title>Spock</Title>
        </TitleBox>
        <ScoreBox>
          <ScoreContainer>
            <ScoreTitle>Score</ScoreTitle>
            <ScoreValue>{loading ? "" : score}</ScoreValue>
          </ScoreContainer>
        </ScoreBox>
      </FlexBox>
    </Container>
  )
}

export default Header
