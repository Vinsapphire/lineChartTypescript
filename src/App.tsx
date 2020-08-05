import React from "react";
import "./App.css";
import ConfigurationForm from "./components/ConfigurationForm";
import GraphCanvas from "./components/GraphCanvas";

function App() {
  return (
    <div className="app">
      <header className="app-header">Graph generator</header>
      <section className="app-body">
        <ConfigurationForm />
        <GraphCanvas />
      </section>
    </div>
  );
}

export default App;
