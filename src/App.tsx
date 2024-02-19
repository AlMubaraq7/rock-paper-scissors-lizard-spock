import "./App.css"
import { Routes, Route } from "react-router-dom"
import ChoicePage from "./pages/ChoicePage/choicePage.component"
import ResultPage from "./pages/ResultPage/resultPage.component"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ChoicePage />} />
      <Route path="/result" element={<ResultPage />} />
    </Routes>
  )
}

export default App
