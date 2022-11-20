import UserInput from "./components/User/UserInput/UserInput";
import UserList from "./components/User/UserList/UserList";

import { useState } from "react";

const App = () => {
  const [userData, setUserData] = useState([]);

  let dataContent = null;
  if(userData.length > 0){
    dataContent = <UserList userData={userData} />;
  }


  

  return (
    <div className="App">
      <UserInput setUserData={setUserData}/>
      {dataContent}
    </div>
  );
}

export default App;
