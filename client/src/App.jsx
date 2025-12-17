import { useState } from "react";
import Acc from './Components/Shared';
import Login from './Pages/Login/Log';
import Registration from './Pages/Registration/Reg';

function App() {
  const [tab, setTab] = useState("login");

  return (
    <Acc tab={tab} setTab={setTab}>
      {tab === "login" && <Login />}
      {tab === "register" && <Registration />}
    </Acc>
  );
}

export default App;
