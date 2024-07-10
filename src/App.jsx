import UserComponent from "./components/UserComponent"
import { createContext } from 'react';

export const MyContext = createContext();

const App = () => {
  const contextValue = { name: 'Sumit' };

  return (
    <MyContext.Provider value={contextValue}>
      <UserComponent age="25" />
    </MyContext.Provider>
  )
}
export default App