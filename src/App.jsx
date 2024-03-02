import { Routes, Route } from "react-router-dom";

import "./App.css";
// import Home from './pages/index';
import Layout from "./pages/layout/layout";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </div>
  );
};

export default App;
