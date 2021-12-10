import Home from "./pages/home";
import React from "react";
import Detail from "./pages/details";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



import { StoreProvider } from "./utils/GlobalState";


function App() {
  return (
    <Router>
      <div>
        <StoreProvider>
          <Home />
          <Routes>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/courses/:id" component={Detail} />
            
          </Routes>
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;
