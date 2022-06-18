import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UsersInformationView from "./components/UsersInformationView";
import UsersView from "./components/UsersView";
import { useState, useMemo } from "react";
import { UserContext } from "./components/UserContext";

function App() {

  //setting value to user context
  const [value, setValue] = useState(1);

  const providerValue = useMemo(() => ({value, setValue}), [value, setValue])

  return (
    <div className="App">
      <UserContext.Provider value={providerValue}>
        <Router>
          <Routes>
            <Route path="/" element={<UsersView />}></Route>
            <Route path="/userinfo" element={<UsersInformationView />}></Route>
          </Routes>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
