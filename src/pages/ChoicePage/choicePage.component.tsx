import Choice from "../../components/choice/choice.component"
import Header from "../../components/header/header.component"
import Rules from "../../components/rules/rules.component"
import { Container } from "./choicePage.styles"
const ChoicePage = () => {
  return (
    <Container>
      <Header />
      <Choice />
      <Rules />
    </Container>
  )
}

export default ChoicePage
