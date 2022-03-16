import "./App.css";
import React, { useState } from "react";
import Layout from "./containers/layout/layout";

function App() {
  const [isLeftBarOpen, setIsLeftBarOpen] = useState(false);
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  return (
    <div>
      <Layout
        isLeftBarOpen={isLeftBarOpen}
        setIsLeftBarOpen={setIsLeftBarOpen}
        isAsideOpen={isAsideOpen}
        setIsAsideOpen={setIsAsideOpen}
      />
    </div>
  );
}

export default App;
