import React, { useContext } from "react";
import Header from "./Header";
import Profile from "./Profile";
import { ThemeContext } from "../context/theme";

import { UserProvider } from "../context/user";

function App() {
  const {theme} = useContext(ThemeContext);
 // const [user, setUser] = useState(null);
  return (
    <main className={theme}>
      <UserProvider>
      <Header />
      {/* <Header theme={theme} setTheme={setTheme} user={user} setUser={setUser} /> */}
      {/* <Profile theme={theme} user={user} /> */}
      <Profile />
      </UserProvider>
    </main>
  );
}

export default App;
