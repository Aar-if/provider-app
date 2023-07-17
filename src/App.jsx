import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TagContent from "./pages/TagContent";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<TagContent />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
