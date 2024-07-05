import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogicalReasoning from "./components/LogicalReasoning";
import TopicPage from "./components/TopicPage";
import NotFound from "./components/NotFound";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LogicalReasoning />} />
      <Route path="/topic/:topic" element={<TopicPage />} />
      <Route element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
