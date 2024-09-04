import { FullStackTooltip } from "@/components";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { toast } from "@/hooks/use-toast";
import { IUser } from "@/models";
import { UserService } from "@/services/UserService";
import { dialogStore, usersStore } from "@/store";
import { Pencil, Plus, Trash2 } from "lucide-react";
import { useEffect } from "react";

export function UsersTable() {
    useEffect(() => {
        new UserService().list();
    }, []);

    const { users, setUser } = usersStore();
    const { open } = dialogStore();

    const handleSave = () => {
        setUser({} as IUser);
        open();
    }

    return (
        <div className="pl-4 pr-4 rounded-md flex items-center justify-center mx-auto max-w-6xl w-full">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Nome</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Senha</TableHead>
                        <TableHead>Data de Criação</TableHead>
                        <TableHead />
                    </TableRow>
                </TableHeader>
                <TableBody>{
                    users.map(user =>
                        <TableRow key={user.id} className="odd:bg-primary/10">
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.password}</TableCell>
                            <TableCell>{user.created_at}</TableCell>
                            <TableCell className="flex flex-row gap-4 justify-end">
                                <FullStackTooltip children={< Trash2 className="hover:cursor-pointer text-accent-foreground/60" onClick={() => {
                                    new UserService().delete(user.id, toast);
                                }} />} content="Clique para deletar o usuário." />
                                <FullStackTooltip children={< Pencil className="hover:cursor-pointer text-accent-foreground/60" onClick={() => {
                                    setUser(user);
                                    open();
                                }} />} content="Clique para editar o usuário." />
                            </TableCell>
                        </TableRow>
                    )
                }
                </TableBody>
            </Table>
            <FullStackTooltip children={<Button className="fixed bottom-4 right-4 rounded-full h-14" onClick={handleSave}
            ><Plus /></Button>} content="Clique para criar um novo usuário." />

        </div>
    )
}
