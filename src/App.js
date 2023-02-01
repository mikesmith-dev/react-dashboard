import * as React from 'react';
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
//import { useState } from "react";
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';




function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
        {/* <main className="content"> */}
         {/* <Header/> */}
         <Sidebar/>
         {/* </main> */}
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
export default App;

