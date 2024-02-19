import Header from "../../components/header/header.component"
import Result from "../../components/result/result.component"
import Rules from "../../components/rules/rules.component"
import { Container } from "./resultPage.styles"
const ResultPage = () => {
  return (
    <Container>
      <Header />
      <Result />
      <Rules />
    </Container>
  )
}

export default ResultPage
