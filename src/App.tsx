import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomeScreen } from "./screens";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
