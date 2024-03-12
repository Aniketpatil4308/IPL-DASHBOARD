import "./App.scss";
import { TeamPage } from "./pages/TeamPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { MatchPage } from "./pages/MatchPage";
import { HomePage } from "./pages/HomePage";
import About from "./pages/About";
import { ErrorPage } from "./pages/ErrorPage";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/teams/:teamName" element={<TeamPage />} />
          </Routes>
          <Routes>
            <Route
              path="/teams/:teamName/matches/:year"
              element={<MatchPage />}
            />
            <Route path="/" element={<HomePage />} />
            <Route path="/About" element={<About />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
