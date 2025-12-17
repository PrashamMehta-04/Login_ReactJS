import { useState } from "react";
import Acc from './Components/Shared';

import Login from './Pages/Login/Log';

function App() {
  const [tab, setTab] = useState("login");

  return (
    <Acc tab={tab} setTab={setTab}>
      {tab === "login" && <Login />}
    </Acc>
  );
}

export default App;
