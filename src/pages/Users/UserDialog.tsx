
import { Save } from "lucide-react"
import { FullStackTooltip } from "@/components";
import { Button, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, Input, Label } from "@/components/ui";
import { UserService } from "@/services/UserService";
import { useToast } from "@/hooks/use-toast";
import { dialogStore, usersStore } from "@/store";
import { IUserInput } from "@/models";

export function UserDialog() {
    const { opened, close } = dialogStore();
    const { user, setUser } = usersStore();
    const { toast } = useToast();

    const handleCreate = () => {
        if (!user.id) {
            new UserService().create(user as IUserInput, toast);
        }
        else {
            new UserService().update(user, toast)
        }
        close();
    }

    return (
        <Dialog open={opened} onOpenChange={close}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Usuário</DialogTitle>
                    <DialogDescription>
                        Insira os dados nos campos abaixo. Clique no botão salvar para finalizar.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <Label>Nome</Label>
                    <Input id="name" className="col-span-3" defaultValue={user.name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        const name = e.target.value;
                        setUser({ ...user, name });
                    }} />
                    <Label>Email</Label>
                    <Input type="email" id="email" className="col-span-3" defaultValue={user.email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        const email = e.target.value;
                        setUser({ ...user, email });
                    }} />
                    <Label>Senha</Label>
                    <Input type="password" id="password" className="col-span-3" defaultValue={user.password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        const password = e.target.value;
                        setUser({ ...user, password });
                    }} />
                </div>
                <DialogFooter>
                    <FullStackTooltip
                        children={<Button onClick={handleCreate} onKeyDown={(event) => {
                            if (event.key === "Enter") {
                                handleCreate();
                            }
                        }}><Save /></Button>}
                        content="Clique para salvar o usuário" />

                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
