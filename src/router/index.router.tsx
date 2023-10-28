import { Routes, Route } from "react-router-dom";

//* Pages
import HomePage from "../pages/home.pages";
import ThanksPage from "../pages/thanks.pages";
import EmailContext from "../contexts/email.context";
import { useState } from "react";

function AppRoutes() {
  const [email, setEmail] = useState<string>("");

  return (
    <EmailContext.Provider value={{ email, setEmail }}>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="thanks" element={<ThanksPage />} />
        </Route>
      </Routes>
    </EmailContext.Provider>
  );
}

export default AppRoutes;
