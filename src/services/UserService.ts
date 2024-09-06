import { IUser, IUserInput, IUserLoginInput } from "@/models";
import { usersStore } from "@/store";
import axios from "axios";

export class UserService {
    public list = async () => {
        const { setUsers } = usersStore.getState();

        const users = (await axios.get(import.meta.env.VITE_URL_BACK_END + "/user")).data;
        setUsers(users);
    }

    public create = async (user: IUserInput, toast: ({ }) => void) => {
        const { users, setUsers } = usersStore.getState();
        try {
            const ret = (await axios.post(import.meta.env.VITE_URL_BACK_END + "/user", user)).data as IUser;
            setUsers([...users, ret]);
            toast({
                title: "Sucesso",
                description: "Usuário cadastrado com sucesso!",
            });
        } catch (error) {
            if (axios.isAxiosError(error)) {
                toast({
                    title: "Erro",
                    variant: "destructive",
                    description: error.response?.data.message,
                });
            }
        }
    }

    public login = async (user: IUserLoginInput, toast: ({ }) => void) => {
        const { setUser } = usersStore.getState();
        try {
            const url = import.meta.env.VITE_URL_BACK_END + "/user/login";
            const ret = (await axios.post(url, user)).data as IUser;

            setUser(ret);
            toast({
                title: "Sucesso",
                description: "Login realizado com sucesso!",
            });
            return true;
        } catch (error) {
            console.log(error);

            if (axios.isAxiosError(error)) {
                toast({
                    title: "Erro",
                    variant: "destructive",
                    description: error.response?.data.message,
                });
            }
            return false;
        }
    }

    public update = async (user: IUser, toast: ({ }) => void) => {
        const { users, setUsers } = usersStore.getState();
        try {
            const ret = (await axios.put(import.meta.env.VITE_URL_BACK_END + "/user", user)).data as IUser;
            const index = users.findIndex((u: IUser) => u.id === user.id);

            if (index !== -1) {
                const updatedUsers = [...users];
                updatedUsers[index] = ret;
                setUsers(updatedUsers);
            }
            toast({
                title: "Sucesso",
                description: "Usuário atualizado com sucesso!",
            });
        } catch (error) {
            if (axios.isAxiosError(error)) {
                toast({
                    title: "Erro",
                    variant: "destructive",
                    description: error.response?.data.message,
                });
            }
        }
    }

    public delete = async (id: string, toast: ({ }) => void) => {
        const { removeUser } = usersStore.getState();

        try {
            await axios.delete(import.meta.env.VITE_URL_BACK_END + "/user/" + id);
            removeUser(id);
            toast({
                title: "Sucesso",
                description: "Usuário removido com sucesso!",
            });
        } catch (error) {
            if (axios.isAxiosError(error)) {
                toast({
                    title: "Erro",
                    variant: "destructive",
                    description: error.response?.data.message,
                });
            }
        }
    }
}