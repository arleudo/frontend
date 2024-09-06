import { Button, Input, Label } from "@/components/ui";
import { useToast } from "@/hooks/use-toast";
import { UserService } from "@/services";
import { usersStore } from "@/store";
import { LucideGithub } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
    const { toast } = useToast();
    const navigate = useNavigate();
    const { user, setUser } = usersStore();
    const [valid, setValid] = useState(false);

    const handleLogin = async () => {
        const ret = await new UserService().login(user, toast);
        if (ret) {
            navigate("/home");
        }
    }

    useEffect(() => {
        setValid(!!user.email && !!user.password);
    }, [user.email, user.password]);

    return (
        <>
            <div className="flex flex-col items-center p-6 gap-6 mt-10">
                <Label className="font-bold">Login</Label>
                <Label className="font-normal opacity-75">Entre com seus dados abaixo para realizar o login</Label>
                <div className="grid grid-cols-1 gap-4">
                    <Label>Email</Label>
                    <Input onChange={(e) => {
                        setUser({ ...user, email: e.target.value });
                    }} />
                    <Label>Senha</Label>
                    <Input type="password" onChange={(e) => {
                        setUser({ ...user, password: e.target.value });
                    }} />
                    <Button disabled={!valid} onClick={handleLogin}>Realizar Login</Button>
                    <Button variant={"outline"}>Entrar com Github <LucideGithub className="ml-4" /></Button>
                    <Label className="opacity-75 font-thin">Ainda não possui cadastro? Clique aqui para se cadastrar.</Label>
                </div>
            </div>
        </>
    );
}