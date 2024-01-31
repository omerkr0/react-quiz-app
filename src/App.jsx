import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Quiz from "./components/Quiz";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="quiz" element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
