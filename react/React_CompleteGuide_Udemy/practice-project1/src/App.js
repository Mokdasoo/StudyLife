import UserInput from "./components/User/UserInput/UserInput";
import UserList from "./components/User/UserList/UserList";

import { useState } from "react";

const App = () => {
  const [userData, setUserData] = useState([
    { name: 'Max', age: '31', id: 1}
  ]);

  const addFormHandler = (event) => {
    event.preventDefault();
    setUserData(prevDatas => {
      const updateDatas = [...prevDatas];
      updateDatas.unshift({name: event.target.username.value, age: event.target.age.value, id:Math.random().toString() });
      console.log(updateDatas);
      return updateDatas;
    });
}

  return (
    <div className="App">
      <UserInput addFormHandler={addFormHandler} />
      <UserList userData={userData} />
    </div>
  );
}

export default App;
