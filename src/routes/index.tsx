import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChangePassword, CreateAccont, LoginAccont } from "../pages";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateAccont />} />
        <Route path="/LoginAccont" element={<LoginAccont />} />
        <Route path="/ChangePassword" element={<ChangePassword />} />
      </Routes>
    </BrowserRouter>
  );
}
