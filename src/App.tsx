import React, { useContext, useState } from "react";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Showcase } from "./pages/Showcase";
import { CustomConfig } from "./pages/CustomConfig";
import { Header } from "./components/Header";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme/theme";
import { ConfigContext } from "./context/ConfigContext";

function App() {
  const [data, updateData] = useState<string>(useContext(ConfigContext).data);

  return (
    <ThemeProvider theme={theme}>
      <ConfigContext.Provider value={{ data, updateData }}>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path={`/`} element={<Showcase />} />
            <Route path={`/custom-congig`} element={<CustomConfig />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </ConfigContext.Provider>
    </ThemeProvider>
  );
}

export default App;
