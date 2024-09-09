import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Users } from "./pages/Users";
import { Toaster } from "@/components/ui/toaster";
import { Pressions } from "./pages/Pressions";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { FullStackAppBar } from "./components/FullStackAppBar";
import { FullStackProtectedRoute } from "./components/FullStackProtectedRoute";

function Layout() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <FullStackAppBar />}

      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/" Component={Login} />
        <Route path="/home" element={<FullStackProtectedRoute><Home /></FullStackProtectedRoute>} />
        <Route path="/users" element={<FullStackProtectedRoute><Users /></FullStackProtectedRoute>} />
        <Route path="/pressions" element={<FullStackProtectedRoute><Pressions /></FullStackProtectedRoute>} />
      </Routes>
      <Toaster />
    </>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
