import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Users } from "./pages/Users"
import { Toaster } from "@/components/ui/toaster";
import { Pressions } from "./pages/Pressions";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";

export function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Login} />
          <Route path="/home" Component={Home} />
          <Route path="/users" Component={Users} />
          <Route path="/pressions" Component={Pressions} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </>
  )
}