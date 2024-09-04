import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Users } from "./pages/Users"
import { Toaster } from "@/components/ui/toaster";
import { Pressions } from "./pages/Pressions";

export function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/users" Component={Users} />
          <Route path="/pressions" Component={Pressions} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </>
  )
}