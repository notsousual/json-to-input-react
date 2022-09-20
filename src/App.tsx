import React, { useContext, useState } from "react";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Showcase } from "./pages/Showcase";
import { EditConfig } from "./pages/EditConfig";
import { Header } from "./components/Header";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme/theme";
import { ConfigContext } from "./context/ConfigContext";
import { JSONObject } from "./model/types/JSONObject";

function App() {
  const [data, updateData] = useState<JSONObject | undefined>(
    useContext(ConfigContext).data
  );

  return (
    <ThemeProvider theme={theme}>
      <ConfigContext.Provider value={{ data, updateData }}>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path={`/`} element={<Showcase />} />
            <Route path={`/custom-config`} element={<EditConfig />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </ConfigContext.Provider>
    </ThemeProvider>
  );
}

export default App;
