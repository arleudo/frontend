import { Menu, LogOut, Settings } from "lucide-react";
import { FullStackTooltip } from "./FullStackTooltip";
import { useNavigate } from "react-router-dom";
import { usersStore } from "@/store";

export function FullStackAppBar() {
    const navigate = useNavigate();
    const { setUser, user } = usersStore();

    const handleLogout = () => {
        setUser(null);
        navigate("/", {replace: true});
    }

    return (
        <header className="w-full bg-primary shadow-md fixed top-0">
            <div className="mx-auto px-4 py-2 flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <Menu className="w-6 h-6 text-destructive-foreground hover:cursor-pointer" />
                    <span className="text-xl text-destructive-foreground font-semibold">FullStack Aplication</span>
                </div>

                <div className="flex items-center gap-4 text-destructive-foreground">
                    {user ? 
                    <>
                        <span>{user.name}</span>/<span>{user.email}</span>
                    </>:<></>}
                    <FullStackTooltip content="Clique para sair da aplicação" children={
                        <LogOut className="w-6 h-6 text-destructive-foreground hover:cursor-pointer" onClick={handleLogout} />
                    } />
                    <Settings className="w-6 h-6 text-destructive-foreground hover:cursor-pointer" />
                </div>
            </div>
        </header>
    );
}
