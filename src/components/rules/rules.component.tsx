import { useState } from "react"
import {
  Button,
  RulesContainer,
  RulesOverlay,
  RulesTextBox,
  RulesImgBox,
  RulesText,
  RulesCloseContainer,
  RulesClose,
  RulesImg,
} from "./rules.styles"
import RulesSvg from "../../assets/image-rules-bonus.svg"
import Close from "../../assets/icon-close.svg"
const Rules = () => {
  const [active, setActive] = useState(false)
  return (
    <>
      <Button onClick={() => setActive(!active)}>Rules</Button>
      <RulesOverlay $active={active}>
        <RulesContainer>
          <RulesTextBox>
            <RulesText>Rules</RulesText>
            <RulesCloseContainer>
              <RulesClose src={Close} onClick={() => setActive(!active)} />
            </RulesCloseContainer>
          </RulesTextBox>
          <RulesImgBox>
            <RulesImg src={RulesSvg} />
          </RulesImgBox>
        </RulesContainer>
      </RulesOverlay>
    </>
  )
}

export default Rules
