import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import FormContainer from "./pages/FormContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="form" element={<FormContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
